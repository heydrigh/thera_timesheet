import React from 'react'
import * as S from './styles'
import { TimesheetTableProps } from './types'
import { calculateTotalTime, formattedDate, formattedTime } from './utils'

function Table({ data }: TimesheetTableProps) {
	return (
		<S.TableWrapper>
			<S.Table>
				<S.TableHead>
					<S.TableRow>
						<S.TableHeader>Data</S.TableHeader>
						<S.TableHeader>Hora início</S.TableHeader>
						<S.TableHeader>Almoço início</S.TableHeader>
						<S.TableHeader>Almoço fim</S.TableHeader>
						<S.TableHeader>Hora fim</S.TableHeader>
						<S.TableHeader>tempo total</S.TableHeader>
					</S.TableRow>
				</S.TableHead>
				<S.TableBody>
					{data.map((item) => (
						<S.TableRow key={item.id}>
							<S.TableCell>{formattedDate(item.start)}</S.TableCell>
							<S.TableCell>{formattedTime(item.start)}</S.TableCell>
							<S.TableCell>{item.startLunch && formattedTime(item.startLunch)}</S.TableCell>
							<S.TableCell>{item.endLunch && formattedTime(item.endLunch)}</S.TableCell>
							<S.TableCell>{item.end && formattedTime(item.end)}</S.TableCell>
							<S.TableCell>{calculateTotalTime(item)}</S.TableCell>
						</S.TableRow>
					))}
				</S.TableBody>
			</S.Table>
		</S.TableWrapper>
	)
}

export default Table
