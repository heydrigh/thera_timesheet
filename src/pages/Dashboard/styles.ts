import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	margin-top: 4rem;
	padding: 1rem 6rem;
	width: 100%;
`

export const Logo = styled.img`
	height: 4rem;
	width: 12rem;
`

export const Greetings = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.fonts.sizes.xxlarge};
		font-weight: ${theme.fonts.weight.bold};
		margin-left: 9.5rem;
	`}
`

export const LogoutButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	margin-left: auto;
`

export const CloseIcon = styled.img`
	height: 5rem;
	width: 5rem;
`

export const TimeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 4rem;
`

export const DateTimeText = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-size: ${theme.fonts.sizes.xxlarge};
		font-weight: ${theme.fonts.weight.bold};

		& + & {
			margin-left: 4rem;
		}
	`}
`

export const ActiveTimer = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.fonts.sizes.xxlarge};
		font-weight: ${theme.fonts.weight.bold};
		margin-left: 8.5rem;
	`}
`

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	margin-top: 4.6rem;
`

export const TableWrapper = styled.div`
	max-width: 1150px;
	display: flex;
	margin-top: 6rem;
`
