import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
	email: Yup.string().email().required('Por favor preencha o email').trim(),
	password: Yup.string().required('Por favor preencha a senha').trim(),
})
