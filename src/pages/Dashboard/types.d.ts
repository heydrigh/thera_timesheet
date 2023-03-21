export interface Item {
	id: number
	start: string
	startLunch: string | null
	endLunch: string | null
	end: string | null
}

export interface TimesheetResponse {
	data: Item[]
}

export interface ActiveTimeProps {
	todayItem: Item
}
