import { useField } from 'formik'
import * as S from './styles'
import { InputProps } from './types'

const Input = ({ label, name, icon, ...rest }: InputProps) => {
	const [field, meta] = useField({ name })

	const formikError = meta.touched && meta.error

	return (
		<S.Wrapper>
			<S.Icon aria-label='icon' src={icon} />

			<S.InputField placeholder={label} id={rest.id || name} {...field} {...rest} />

			{formikError && <S.ErrorMessage role='alert'>{meta.error}</S.ErrorMessage>}
		</S.Wrapper>
	)
}

export default Input
