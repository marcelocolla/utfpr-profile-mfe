import * as Yup from 'yup'

export const FormDesegSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  senha: Yup.string().required('Required'),
})
