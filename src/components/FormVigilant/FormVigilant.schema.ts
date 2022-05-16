import { object, string } from 'yup'

export const FormVigilantSchema = object().shape({
  email: string().required('Required'),
  senha: string().when('props.viewOnly', {
    is: false,
    then: string().required('Required'),
  }),
})
