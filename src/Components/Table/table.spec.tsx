import { screen } from '@testing-library/react'
import { renderWithTheme } from '@utils/tests/helpers'
import Table from './'
import { Item } from './types'

const mockData: Item[] = [
	{
		id: 1,
		start: '2023-03-20T08:00:00',
		startLunch: '2023-03-20T12:00:00',
		endLunch: '2023-03-20T13:00:00',
		end: '2023-03-20T18:00:00',
	},
	{
		id: 2,
		start: '2023-03-21T08:00:00',
		startLunch: '2023-03-21T12:00:00',
		endLunch: '2023-03-21T13:00:00',
		end: '2023-03-21T18:00:00',
	},
]

describe('Table Component', () => {
	it('should render the table component', () => {
		renderWithTheme(<Table data={mockData} />)

		const headerElements = screen.getAllByRole('columnheader')
		expect(headerElements.length).toBe(6)

		const rowElements = screen.getAllByRole('row')
		expect(rowElements.length).toBe(3)
	})

	it('should render the table component with correct data', () => {
		renderWithTheme(<Table data={mockData} />)

		const dateElements = screen.getAllByText(/(20|21)\/03\/2023/)
		expect(dateElements.length).toBe(2)

		const startTimeElements = screen.getAllByText(/08:00:00/)
		expect(startTimeElements.length).toBe(2)

		const startLunchElements = screen.getAllByText(/12:00:00/)
		expect(startLunchElements.length).toBe(2)

		const endLunchElements = screen.getAllByText(/13:00:00/)
		expect(endLunchElements.length).toBe(2)

		const endTimeElements = screen.getAllByText(/18:00:00/)
		expect(endTimeElements.length).toBe(2)

		const totalTimeElements = screen.getAllByText(/09:00:00/)
		expect(totalTimeElements.length).toBe(2)
	})
})
