import { CreateTimesheetDTO, CreateTimesheetResponse } from '@services/mutations/useCreateTimesheet'
import { UpdateTimesheetDTO, UpdateTimesheetResponse } from '@services/mutations/useUpdateTimesheet'
import { api } from '.'

export enum GrantType {
	Password = 'password',
	refreshToken = 'refresh_token',
}

interface AuthenticationResponse {
	accessToken: string
	refreshToken: string
	tokenType: string
	name: string
}

interface LoginDTO {
	userID?: string
	accessKey: string
	grantType: GrantType
}

export const theraApi = {
	authenticate: (loginDto: LoginDTO) => api.post<AuthenticationResponse>('/api/accounts', loginDto),
	refreshToken: (loginDto: LoginDTO) => api.post<AuthenticationResponse>('/api/accounts', loginDto),
	getTimesheet: () => api.get('api/timesheet'),

	createTimesshet: (createTimesheetDTO: CreateTimesheetDTO) =>
		api.post<CreateTimesheetResponse>('api/timesheet', createTimesheetDTO),

	updateTimesheet: (updateTimesheetDTO: UpdateTimesheetDTO) =>
		api.put<UpdateTimesheetResponse>(`api/timesheet/${updateTimesheetDTO.id}`, updateTimesheetDTO),
}
