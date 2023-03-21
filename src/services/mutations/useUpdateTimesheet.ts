import { AxiosError } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { theraApi } from '@services/api/routes'

export interface UpdateTimesheetResponse {
	id: number
	start: string
	startLunch: string | null
	endLunch: string | null
	end: string | null
}

export interface UpdateTimesheetDTO {
	id: number
	startLunch?: string
	endLunch?: string
	end?: string
}

type UseupdateDocumentOptions = UseMutationOptions<
	UpdateTimesheetResponse,
	AxiosError,
	UpdateTimesheetDTO
>

const updateTimesheetQueryKey = 'updateTimesheetQueryKey'

const updateTimesheet = async (updateTimesheetDTO: UpdateTimesheetDTO) => {
	const updatedTimesheet = {
		id: updateTimesheetDTO.id,
		...(updateTimesheetDTO.startLunch && { startLunch: updateTimesheetDTO.startLunch }),
		...(updateTimesheetDTO.endLunch && { endLunch: updateTimesheetDTO.endLunch }),
		...(updateTimesheetDTO.end && { end: updateTimesheetDTO.end }),
	}
	const response = await theraApi.updateTimesheet(updatedTimesheet)

	return response.data
}

const useUpdateTimesheet = (options?: UseupdateDocumentOptions) =>
	useMutation<UpdateTimesheetResponse, AxiosError, UpdateTimesheetDTO>(
		updateTimesheetQueryKey,
		updateTimesheet,
		options
	)

export default useUpdateTimesheet
