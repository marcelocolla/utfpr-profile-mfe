import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { useHistory } from 'react-router-dom'

import { TurnoValues, VigilanteValues } from 'types/User'
import httpClient from 'services/httpClient'
import { FormVigilantFields } from 'components/FormVigilantFields'
import { FormVigilantSchema } from './FormVigilant.schema'

type FormProps = {
  viewOnly?: boolean
  id_usuario?: number
}

export const FormVigilant = (props: FormProps): JSX.Element => {
  const history = useHistory()
  const [turnos, setTurnos] = useState<TurnoValues[]>([])
  const [vigilante, setVigilante] = useState<VigilanteValues>({
    id_pessoa: 0,
    nome_pessoa: '',
    email: '',
    matricula: '',
    turno: 1,
    senha: '',
  })

  useEffect(() => {
    // Passo 1: recuperar todos os turnos
    try {
      httpClient.get('/turno').then((response: any) => {
        setTurnos(response.data.turno)
      })
    } catch (err) {
      console.error(err)
    }

    // Passo 2: popular informações do vigilante
    try {
      if (props.id_usuario !== 0) {
        httpClient.get('/vigilante/' + props.id_usuario).then((response: any) => {
          if (response.data.vigilante.length !== 0) {
            const getVigilante = response.data.vigilante[0]

            setVigilante({
              id_pessoa: getVigilante.Pessoa.id_pessoa,
              nome_pessoa: getVigilante.Pessoa.nome_pessoa,
              email: getVigilante.Pessoa.email,
              matricula: getVigilante.matricula,
              turno: getVigilante.id_turno,
            })
          }
        })
      }
    } catch (err) {
      console.error(err)
    }
  }, [props])

  async function handleSubmit(values: VigilanteValues) {
    await httpClient.post('/vigilante', {
      nome_pessoa: values.nome_pessoa,
      email: values.email,
      matricula: values.matricula,
      tipo_usuario: 3,
      id_turno: values.turno,
      senha: values.senha,
    })

    history.go(0)
  }

  async function handleUpdate(values: any) {
    console.log(values)

    await httpClient
      .put('/vigilante', {
        id_vigilante: props.id_usuario,
        id_pessoa: vigilante.id_pessoa,
        nome_pessoa: values.nome_pessoa,
        matricula: values.matricula,
        id_turno: values.turno,
      })
      .then(function (response) {
        if (response.status !== 200) {
          alert('Houve um problema ao atualizar, contate o suporte!')
        } else {
          history.go(0)
        }
      })
  }

  return (
    <Formik
      enableReinitialize
      initialValues={vigilante}
      validationSchema={FormVigilantSchema}
      onSubmit={props.viewOnly ? handleUpdate : handleSubmit}
    >
      <FormVigilantFields viewOnly={props.viewOnly} turnos={turnos} />
    </Formik>
  )
}
