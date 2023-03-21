import useLocalTimer from '@hooks/useLocalTimer'
import * as S from '../../styles'
function LocalTime() {
	const localTime = useLocalTimer()
	return <S.DateTimeText>{localTime}</S.DateTimeText>
}

export default LocalTime
