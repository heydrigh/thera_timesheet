export interface Item {
	id: number
	start: string
	startLunch: string | null
	endLunch: string | null
	end: string | null
}

export interface TimesheetTableProps {
	data: Item[]
}
