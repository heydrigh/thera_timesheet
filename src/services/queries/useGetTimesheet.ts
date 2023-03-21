import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

import { theraApi } from '@services/api/routes'

interface Item {
	id: number
	start: string
	startLunch: string | null
	endLunch: string | null
	end: string | null
}

interface TimesheetResponseResponse {
	items: Item[]
	count: number
	currentPage: number
	pageSize: number
	totalPages: number
	nextPage: string
	previousPage: string
}

type GetTimesheetOptions = UseQueryOptions<
	TimesheetResponseResponse,
	AxiosError,
	TimesheetResponseResponse
>

export const getTimesheetQueryKey = 'getTimesheetQueryKey'

const getTimesheet = async () => {
	const { data } = await theraApi.getTimesheet()

	return data
}

const useGetTimesheet = (options?: GetTimesheetOptions) =>
	useQuery<TimesheetResponseResponse, AxiosError, TimesheetResponseResponse>(
		[getTimesheetQueryKey],
		getTimesheet,
		options
	)

export default useGetTimesheet
