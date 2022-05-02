import React from 'react'
import { Formik } from 'formik'

import httpClient from 'services/httpClient'
import { Department } from 'domains/Department'
import { FormDepartmentFields } from 'components/FormDepartmentFields'

type FormDepartmentProps = {
  user?: any
  onConfirm: () => void
}

type DepartamentoValues = {
  departamento: number
}

export const FormDepartment = (props: FormDepartmentProps) => {
  const [departamentos, setDepartamentos] = React.useState<Department[]>([])

  const initialValues: DepartamentoValues = {
    departamento: 0,
  }

  async function handleSubmit(values: DepartamentoValues) {
    try {
      httpClient
        .put('professor', {
          id_pessoa: props.user?.id_pessoa,
          id_professor: props.user?.professor?.id_professor,
          nome_pessoa: props.user?.nome,
          email: props.user?.email,
          id_departamento: values.departamento,
        })
        .then((response) => {
          props.onConfirm()
        })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    try {
      httpClient.get('departamento').then((response: any) => {
        setDepartamentos(response.data.departamento)
      })
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <Formik enableReinitialize onSubmit={handleSubmit} initialValues={initialValues}>
      <FormDepartmentFields departments={departamentos} />
    </Formik>
  )
}
