import { setAuthentication } from '@services/slices/auth'
import store from '@services/store'
import { baseURL } from '@utils/env-variables'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { theraApi, GrantType } from './routes'
export const api = axios.create({
	baseURL: baseURL,
})

api.interceptors.request.use(
	async (config) => {
		const { accessToken } = store.getState().auth

		if (accessToken && config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}

		return config
	},
	(error) => Promise.reject(error)
)

const refreshLogic = async (failedRequest: any) => {
	try {
		const { refreshToken } = store.getState().auth

		const { data } = await theraApi.refreshToken({
			accessKey: refreshToken!,
			grantType: GrantType.refreshToken,
		})

		const bearer = `Bearer ${data.accessToken}`
		axios.defaults.headers.common['Authorization'] = bearer
		failedRequest.response.config.headers['Authorization'] = bearer

		store.dispatch(
			setAuthentication({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
				name: data.name,
			})
		)

		return Promise.resolve()
	} catch {
		window.location.assign('/')
	}
}

createAuthRefreshInterceptor(api, refreshLogic)
