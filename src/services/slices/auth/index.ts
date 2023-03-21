import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthState, AuthenticationUpdateAction } from './types'

const initialState = {} as AuthState

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthentication(state, { payload }: PayloadAction<AuthenticationUpdateAction>) {
			state.refreshToken = payload.refreshToken
			state.accessToken = payload.accessToken
			state.name = payload.name
		},

		signOut: () => initialState,
	},
})

export const { setAuthentication, signOut } = authSlice.actions

export default authSlice.reducer
