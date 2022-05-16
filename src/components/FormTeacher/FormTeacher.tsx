import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import { FormTeacherFields } from 'components/FormTeacherFields'
import httpClient from 'services/httpClient'

type FormProps = {
  viewOnly?: boolean
  id_usuario?: number
}

type ProfessorValues = {
  nome_pessoa: string
  email: string
  matricula: string
  departamento: string
}

export const FormTeacher = (props: FormProps) => {
  const [professor, setProfessor] = useState<ProfessorValues>({
    nome_pessoa: '',
    email: '',
    matricula: '',
    departamento: '',
  })

  useEffect(() => {
    try {
      if (props.id_usuario !== 0) {
        httpClient.get('professor/' + props.id_usuario).then((response: any) => {
          if (response.data.professor.length !== 0) {
            const getProfessor = response.data.professor[0]

            httpClient.get('/departamento/' + getProfessor.id_departamento).then((depResponse) => {
              const getDepartamento = depResponse.data.departamento[0]

              setProfessor({
                nome_pessoa: getProfessor.Pessoa.nome_pessoa,
                email: getProfessor.Pessoa.email,
                matricula: getProfessor.matricula,
                departamento: getDepartamento.sigla_departamento ?? '',
              })
            })
          }
        })
      }
    } catch (err) {
      console.error(err)
    }
  }, [props])

  async function handleSubmit(values: ProfessorValues) {
    console.log('Deseg não cadastra professor.', values)
  }

  return (
    <Formik enableReinitialize initialValues={professor} onSubmit={handleSubmit}>
      <FormTeacherFields viewOnly={props.viewOnly} />
    </Formik>
  )
}
