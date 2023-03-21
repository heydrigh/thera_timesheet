import { AxiosError } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { theraApi } from '@services/api/routes'

export interface CreateTimesheetResponse {
	id: number
	start: string
	startLunch: string | null
	endLunch: string | null
	end: string | null
}

export interface CreateTimesheetDTO {
	start: string
	startLunch?: string
	endLunch?: string
	end?: string
}

type UseCreateDocumentOptions = UseMutationOptions<
	CreateTimesheetResponse,
	AxiosError,
	CreateTimesheetDTO
>

const createTimesheetQueryKey = 'createTimesheetQueryKey'

const createTimesheet = async (createTimesheetDTO: CreateTimesheetDTO) => {
	const response = await theraApi.createTimesshet(createTimesheetDTO)

	return response.data
}

const useCreateTimesheet = (options?: UseCreateDocumentOptions) =>
	useMutation<CreateTimesheetResponse, AxiosError, CreateTimesheetDTO>(
		createTimesheetQueryKey,
		createTimesheet,
		options
	)

export default useCreateTimesheet
