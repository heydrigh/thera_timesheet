import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	& + & {
		margin-top: 3.4rem;
	}
`

export const InputField = styled.input`
	${({ theme }) => css`
		width: 37.8rem;
		height: 6.3rem;
		background-color: ${theme.colors.white};
		padding-left: 2.4rem;
		color: ${theme.colors.tertiary};
		border-radius: ${theme.border.radius.default};
		font-size: ${theme.fonts.sizes.xlarge};

		&::placeholder {
			color: ${theme.colors.tertiary};
		}
	`}
`

export const ErrorMessage = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.error};
		font-size: ${theme.fonts.sizes.small};
	`}
`

export const Icon = styled.img`
	width: 5.4rem;
	height: 5.4rem;
	position: absolute;
	left: -8.7rem;
`
