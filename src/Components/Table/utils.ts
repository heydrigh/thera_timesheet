import { DateTime, Duration } from 'luxon'
import { Item } from './types'

export const calculateTotalTime = (item: Item): string | null => {
	if (!item.startLunch || !item.endLunch || !item.end) {
		return null
	}

	const start = DateTime.fromISO(item.start, { setZone: true })
	const startLunch = DateTime.fromISO(item.startLunch, { setZone: true })
	const endLunch = DateTime.fromISO(item.endLunch, { setZone: true })
	const end = DateTime.fromISO(item.end, { setZone: true })

	const morningWorkDuration = startLunch.diff(start).as('milliseconds')
	const afternoonWorkDuration = end.diff(endLunch).as('milliseconds')
	const totalWorkDuration = morningWorkDuration + afternoonWorkDuration

	const totalTime = Duration.fromMillis(totalWorkDuration).toFormat('hh:mm:ss')

	return totalTime
}

export const formattedDate = (date: string) =>
	DateTime.fromISO(date, { setZone: true }).toFormat('dd/MM/yyyy')

export const formattedTime = (date: string) => {
	return DateTime.fromISO(date, { setZone: true }).toFormat('HH:mm:ss')
}
