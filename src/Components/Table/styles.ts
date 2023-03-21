import styled, { css } from 'styled-components'

export const TableWrapper = styled.div`
	width: 100%;
	overflow-x: auto;
`

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`

export const TableHead = styled.thead`
	background: none;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
	${TableBody} & {
		&:nth-child(odd) {
			background-color: #ffffff;
		}

		&:nth-child(even) {
			background-color: #e8e8e8;
		}
	}
`

export const TableHeader = styled.th`
	${({ theme }) => css`
		font-size: ${theme.fonts.sizes.large};
		color: ${theme.colors.primary};
		text-transform: uppercase;
		padding: 1rem;
	`}
`

export const TableCell = styled.td`
	${({ theme }) => css`
		font-size: ${theme.fonts.sizes.medium};
		color: ${theme.colors.black};
		text-transform: uppercase;
		height: 6rem;
		border-bottom: 2px solid ${theme.colors.secondary};
		border-right: 2px solid ${theme.colors.secondary};
		padding: 1rem;
	`}
`
