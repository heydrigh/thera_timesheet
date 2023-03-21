import useAppDispatch from '@hooks/useAppDispatch'
import { signOut } from '@services/slices/auth'
import * as S from './styles'
import theraLogo from '@assets/images/logo.svg'
import closeIcon from '@assets/icons/close.svg'
import useAppSelector from '@hooks/useAppSelector'
import { todayDate } from './utils'
import Button from 'Components/Button'
import { useCallback, useMemo } from 'react'
import useGetTimesheet, { getTimesheetQueryKey } from '@services/queries/useGetTimesheet'
import LocalTime from './Components/LocalTime'
import Table from 'Components/Table'
import { DateTime } from 'luxon'
import { Item } from './types'
import useCreateTimesheet, { CreateTimesheetDTO } from '@services/mutations/useCreateTimesheet'
import { useQueryClient } from 'react-query'
import useUpdateTimesheet, { UpdateTimesheetDTO } from '@services/mutations/useUpdateTimesheet'
import ActiveTime from './Components/ActiveTime'

function Dashboard() {
	const queryClient = useQueryClient()
	const dispatch = useAppDispatch()

	const { mutate: createTimesheet, isLoading: isCreating } = useCreateTimesheet({
		onSuccess: (res) => {
			queryClient.invalidateQueries(getTimesheetQueryKey)
		},
	})

	const { mutate: updateTimesheet, isLoading: isUpdating } = useUpdateTimesheet({
		onSuccess: () => {
			queryClient.invalidateQueries(getTimesheetQueryKey)
		},
	})

	const { data: timesheetData } = useGetTimesheet()
	const { name: userName } = useAppSelector((state) => state.auth)
	const handleCloseButton = () => {
		dispatch(signOut())
	}

	const handleStartDay = () => {
		const morningTime = {
			start: DateTime.now().toUTC().toISO(),
		} satisfies CreateTimesheetDTO
		createTimesheet(morningTime)
	}

	const handleStartLunch = () => {
		const lunchTime = {
			id: todayItem!.id!,
			startLunch: DateTime.now().toISO(),
		} satisfies UpdateTimesheetDTO
		updateTimesheet(lunchTime)
	}

	const handleEndLunch = () => {
		const lunchTime = {
			id: todayItem!.id!,
			endLunch: DateTime.now().toISO(),
		} satisfies UpdateTimesheetDTO
		updateTimesheet(lunchTime)
	}

	const handleEndDay = () => {
		const lunchTime = {
			id: todayItem!.id!,
			end: DateTime.now().toISO(),
		} satisfies UpdateTimesheetDTO
		updateTimesheet(lunchTime)
	}

	function isToday(dateString: string): boolean {
		const inputDate = DateTime.fromISO(dateString, { zone: 'utc' }).startOf('day')
		const today = DateTime.utc().startOf('day')

		return inputDate.equals(today)
	}

	const todaysItems = useCallback((data: Item[]) => {
		return data.find((item) => isToday(item.start))
	}, [])

	const todayItem = useMemo(() => {
		return timesheetData && todaysItems(timesheetData.items)
	}, [todaysItems, timesheetData])

	const startDayActive = !todayItem
	const startLunchActive = todayItem !== undefined && !todayItem.startLunch && !todayItem.end
	const endLunchActive =
		todayItem !== undefined && !!todayItem.startLunch && !todayItem.endLunch && !todayItem.end
	const endDayActive = todayItem !== undefined && !!todayItem.endLunch && !todayItem.end

	return (
		<S.Wrapper>
			<S.Header>
				<S.Logo src={theraLogo} />
				<S.Greetings>Olá, {userName}</S.Greetings>
				<S.LogoutButton>
					<S.CloseIcon onClick={handleCloseButton} src={closeIcon} />
				</S.LogoutButton>
			</S.Header>
			<S.TimeWrapper>
				<S.DateTimeText>{todayDate}</S.DateTimeText>
				<LocalTime />
				{todayItem && <ActiveTime todayItem={todayItem} />}
			</S.TimeWrapper>

			<S.ButtonWrapper>
				<Button onClick={handleStartDay} loading={isCreating} active={startDayActive}>
					CHEGUEI
				</Button>

				<Button
					onClick={handleStartLunch}
					loading={isUpdating && startLunchActive}
					active={startLunchActive}
				>
					FUI ALMOÇAR
				</Button>

				<Button
					onClick={handleEndLunch}
					loading={isUpdating && endLunchActive}
					active={endLunchActive}
				>
					VOLTEI
				</Button>

				<Button onClick={handleEndDay} loading={isUpdating && endDayActive} active={endDayActive}>
					FUI
				</Button>
			</S.ButtonWrapper>
			<S.TableWrapper>{timesheetData && <Table data={timesheetData.items} />}</S.TableWrapper>
		</S.Wrapper>
	)
}

export default Dashboard
