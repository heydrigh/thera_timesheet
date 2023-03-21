export interface AuthState {
	accessToken: string | null
	refreshToken: string | null
	name: string | null
}

export interface AuthenticationUpdateAction {
	accessToken: string | null
	refreshToken: string | null
	name: string | null
}
