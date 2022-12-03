import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import { FormDesegFields } from 'components/FormDesegFields'
import httpClient from 'services/httpClient'
import { FormDesegSchema } from './FormDeseg.schema'

type FormProps = {
  viewOnly?: boolean
  id_usuario?: number
}

type FormDesegValues = {
  nome_pessoa: string
  email: string
  matricula: string
  senha?: string
}

export default function FormDeseg(props: FormProps): JSX.Element {
  const [deseg, setDeseg] = useState<FormDesegValues>({
    nome_pessoa: '',
    email: '',
    matricula: '',
    senha: '',
  })

  async function loadDesegById(id: number) {
    await httpClient
      .get('/deseg/' + id)
      .then((response: any) => {
        if (response.data && response.data.deseg?.length !== 0) {
          const getDeseg = response.data.deseg[0]

          setDeseg({
            nome_pessoa: getDeseg.Pessoa.nome_pessoa,
            email: getDeseg.Pessoa.email,
            matricula: getDeseg.matricula,
          })
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    const id = props.id_usuario || 0

    if (id !== 0) {
      loadDesegById(id)
    }
  }, [props])

  async function handleSubmit(values: FormDesegValues) {
    await httpClient.post('/deseg', {
      nome_pessoa: values.nome_pessoa,
      email: values.email,
      matricula: values.matricula,
      codigo_barra: '02940294',
      tipo_usuario: 1,
      senha: values.senha,
    })

    history.go(0)
  }

  return (
    <Formik
      enableReinitialize
      initialValues={deseg}
      validationSchema={FormDesegSchema}
      onSubmit={handleSubmit}
    >
      <FormDesegFields viewOnly={props.viewOnly} />
    </Formik>
  )
}
