import React, { useEffect } from 'react'
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
    const user = props.user || {}
    const payload = {
      id_pessoa: user.id_pessoa,
      id_professor: user.professor && user.professor.id_professor,
      nome_pessoa: user.nome,
      email: user.email,
      id_departamento: values.departamento,
    }

    await httpClient
      .put('professor', payload)
      .then(() => {
        props.onConfirm()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function loadDepartment() {
    await httpClient
      .get('departamento')
      .then((response: any) => {
        setDepartamentos(response.data.departamento || [])
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    loadDepartment()
  }, [])

  return (
    <Formik enableReinitialize onSubmit={handleSubmit} initialValues={initialValues}>
      <FormDepartmentFields departments={departamentos} />
    </Formik>
  )
}
