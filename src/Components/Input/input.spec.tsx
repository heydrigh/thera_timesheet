import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Formik, Form, FormikErrors } from 'formik'
import Input from './index'

describe('Input', () => {
	it('renders the input element with the correct label and icon', () => {
		const label = 'Test Label'
		const icon = 'test-icon.png'
		renderWithTheme(
			<Formik initialValues={{}} onSubmit={() => {}}>
				<Form>
					<Input name='test' label={label} icon={icon} />
				</Form>
			</Formik>
		)

		const inputElement = screen.getByPlaceholderText('Test Label')
		const iconElement = screen.getByLabelText('icon') as HTMLImageElement

		expect(inputElement).toBeInTheDocument()
		expect(iconElement).toBeInTheDocument()
	})

	it('renders the input with the provided ID', () => {
		renderWithTheme(
			<Formik initialValues={{}} onSubmit={() => {}}>
				<Form>
					<Input name='test' label='Test Label' icon='test-icon.png' id='custom-id' />
				</Form>
			</Formik>
		)

		const inputElement = screen.getByPlaceholderText('Test Label')
		expect(inputElement.id).toBe('custom-id')
	})

	it('calls onChange handler when a user types', () => {
		const handleChange = jest.fn()

		renderWithTheme(
			<Formik initialValues={{ test: '' }} onSubmit={() => {}}>
				<Form>
					<Input name='test' label='Test Label' icon='test-icon.png' onChange={handleChange} />
				</Form>
			</Formik>
		)

		const inputElement = screen.getByPlaceholderText('Test Label')
		fireEvent.change(inputElement, { target: { value: 'test value' } })

		expect(handleChange).toHaveBeenCalledTimes(1)
	})

	it('displays an error message when the field is touched and has an error', async () => {
		const initialValues = { test: '' }
		const onSubmit = () => {}
		const validate = (values: { test: string }): FormikErrors<typeof values> => {
			const errors: FormikErrors<typeof values> = {}
			if (!values.test) {
				errors.test = 'This field is required'
			}
			return errors
		}

		renderWithTheme(
			<Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
				<Form>
					<Input name='test' label='Test Label' icon='test-icon.png' />
				</Form>
			</Formik>
		)

		const inputElement = screen.getByPlaceholderText(/Test Label/i)
		fireEvent.blur(inputElement)

		await waitFor(() => {
			const errorMessage = screen.getByRole('alert')
			expect(errorMessage).toBeInTheDocument()
		})

		await waitFor(() => {
			const errorMessage = screen.getByRole('alert')
			expect(errorMessage).toHaveTextContent(/This field is required/i)
		})
	})
})
