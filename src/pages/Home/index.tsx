import Button from 'Components/Button'
import Input from 'Components/Input'
import { FormikProvider, useFormik } from 'formik'
import * as S from './styles'
import userIcon from '@assets/icons/user.svg'
import keyIcon from '@assets/icons/key.svg'
import theraLogo from '@assets/images/logo.svg'
import { initialValues } from './constants'
import { LoginSchema } from '@schemas/Login'
import useLogin, { LoginDTO } from '@services/mutations/useLogin'
import { GrantType } from '@services/api/routes'
import useAppDispatch from '@hooks/useAppDispatch'
import { setAuthentication } from '@services/slices/auth'
function Home() {
	const dispatch = useAppDispatch()
	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: LoginSchema,
	})
	const { mutate: login, isLoading } = useLogin({
		onSuccess: (res) => {
			dispatch(
				setAuthentication({
					accessToken: res.accessToken,
					refreshToken: res.refreshToken,
					name: res.name,
				})
			)
		},
	})

	function handleSubmit(values: typeof initialValues) {
		const loginParams = {
			userID: values.email,
			accessKey: values.password,
			grantType: GrantType.Password,
		} satisfies LoginDTO

		login(loginParams)
	}
	return (
		<S.Wrapper>
			<S.Logo src={theraLogo} alt='Thera logo' />
			<FormikProvider value={formik}>
				<S.Form onSubmit={formik.handleSubmit}>
					<Input label='Usuário' name='email' icon={userIcon} />
					<Input label='Senha' type='password' name='password' icon={keyIcon} />
					<S.ButtonWrapper>
						<Button loading={isLoading} type='submit' active>
							Login
						</Button>
					</S.ButtonWrapper>
				</S.Form>
			</FormikProvider>
		</S.Wrapper>
	)
}

export default Home
