import { AxiosError } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { theraApi } from '@services/api/routes'

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

export interface LoginDTO {
	userID: string
	accessKey: string
	grantType: GrantType
}

type UseCreateDocumentOptions = UseMutationOptions<AuthenticationResponse, AxiosError, LoginDTO>

const loginQueryKey = 'loginQueryKey'

const login = async ({ accessKey, userID }: LoginDTO) => {
	const response = await theraApi.authenticate({ accessKey, userID, grantType: GrantType.Password })

	return response.data
}

const useLogin = (options?: UseCreateDocumentOptions) =>
	useMutation<AuthenticationResponse, AxiosError, LoginDTO>(loginQueryKey, login, options)

export default useLogin
