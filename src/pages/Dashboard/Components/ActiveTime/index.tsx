import { useState, useEffect } from 'react'
import { ActiveTimeProps } from '../../types'
import { DateTime, Duration } from 'luxon'
import * as S from '../../styles'

function ActiveTime({ todayItem }: ActiveTimeProps) {
	const [activeTime, setActiveTime] = useState(0)

	useEffect(() => {
		const calculateActiveTime = () => {
			if (!todayItem) return 0

			const start = DateTime.fromISO(todayItem.start)
			const startLunch = todayItem.startLunch ? DateTime.fromISO(todayItem.startLunch) : null
			const endLunch = todayItem.endLunch ? DateTime.fromISO(todayItem.endLunch) : null
			const end = todayItem.end ? DateTime.fromISO(todayItem.end) : null
			const now = DateTime.local()

			const beforeLunchDuration =
				startLunch && (now >= startLunch || end)
					? startLunch.diff(start, 'seconds').seconds
					: now.diff(start, 'seconds').seconds

			const afterLunchDuration = endLunch
				? end
					? end.diff(endLunch, 'seconds').seconds
					: now.diff(endLunch, 'seconds').seconds
				: 0

			if (startLunch && now < startLunch) {
				return now.diff(start, 'seconds').seconds
			}

			return beforeLunchDuration + afterLunchDuration
		}

		const intervalId = setInterval(() => {
			setActiveTime(calculateActiveTime())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [todayItem])

	const formattedActiveTime = activeTime
		? Duration.fromObject({ seconds: activeTime }).toFormat('hh:mm:ss')
		: '00:00:00'

	return <S.ActiveTimer>Tempo: {formattedActiveTime}</S.ActiveTimer>
}

export default ActiveTime
