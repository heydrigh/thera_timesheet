import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Button from '.'

describe('Button', () => {
	it('should render the button with the correct text', () => {
		renderWithTheme(<Button active={false}>Click me</Button>)
		const buttonElement = screen.getByText(/Click me/i)
		expect(buttonElement).toBeInTheDocument()
	})

	it('should render the loading spinner when loading prop is true', () => {
		renderWithTheme(
			<Button active={false} loading>
				Click me
			</Button>
		)
		const spinnerElement = screen.getByLabelText(/loading-spinner/i)
		expect(spinnerElement).toBeInTheDocument()
	})

	it('should render the button with the correct background color when active prop is true', () => {
		renderWithTheme(<Button active>Click me</Button>)
		const buttonElement = screen.getByText(/Click me/i)
		expect(buttonElement).toHaveStyle({ backgroundColor: '#FCCD2A' })
	})

	it('should call the onClick function when the button is clicked', () => {
		const handleClick = jest.fn()
		renderWithTheme(
			<Button active onClick={handleClick}>
				Click me
			</Button>
		)
		const buttonElement = screen.getByText(/Click me/i)
		buttonElement.click()
		expect(handleClick).toHaveBeenCalled()
	})
})
