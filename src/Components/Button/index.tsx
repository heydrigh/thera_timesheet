import { BeatLoader } from 'react-spinners'
import * as S from './styles'
import { IButtonProps } from './types'

function Button({ children, loading, active, ...rest }: IButtonProps) {
	return (
		<S.Wrapper disabled={!active} {...rest} active={active}>
			{loading ? <BeatLoader aria-label='loading-spinner' size={20} color='#fff' /> : children}
		</S.Wrapper>
	)
}

export default Button
