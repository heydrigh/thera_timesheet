import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

const useLocalTimer = () => {
	const [time, setTime] = useState(DateTime.local().toFormat('HH:mm:ss'))

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(DateTime.local().toFormat('HH:mm:ss'))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return time
}

export default useLocalTimer
