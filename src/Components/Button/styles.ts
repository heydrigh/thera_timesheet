import styled, { css } from 'styled-components'
import { IButtonProps } from './types'

export const Wrapper = styled.button<Pick<IButtonProps, 'active'>>`
	${({ theme, active }) => css`
		height: 6.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.6rem 3rem;
		background: ${active ? theme.colors.primary : theme.colors.secondary};
		color: ${active ? theme.colors.secondary : theme.colors.white};
		border-radius: ${theme.border.radius.default};
		border: 0.4rem solid ${theme.colors.primary};
		font-size: ${theme.fonts.sizes.xxlarge};
		cursor: pointer;
	`}
`
