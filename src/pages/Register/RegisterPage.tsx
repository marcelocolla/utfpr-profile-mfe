import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { capitalize } from '@material-ui/core'

import { Modal, Button, Card } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import httpClient from 'services/httpClient'

import { PageLayout } from 'components/PageLayout'
import { FormVigilant } from 'components/FormVigilant'
import FormDeseg from 'components/FormDeseg/FormDeseg'
import { FormTeacher } from 'components/FormTeacher'

import { ListUsers } from './RegisterPage.styles'

type PessoaProps = {
  nome_pessoa: string
  email: string
  tipo_usuario: number
}

type TurnoProps = {
  id_turno: number
  nome_turno: string
}

type UsuarioProps = {
  id_pessoa: number
  id_deseg?: number
  id_professor?: number
  id_vigilante?: number
  matricula: number
  Pessoa: PessoaProps
  Turno?: TurnoProps
}

export const RegisterPage = () => {
  const { tipo: tipoUsuario } = useParams<{ tipo: string }>()
  const isVigilant = tipoUsuario === 'vigilante'

  const [usuarios, setUsuarios] = useState<UsuarioProps[]>()

  const [open, setOpen] = useState(false)
  const [viewOnly, setViewOnly] = useState(false)
  const [selection, setSelection] = useState(0)

  function abrirCadastro() {
    if (tipoUsuario !== 'professor') {
      setViewOnly(false)
      setOpen(true)
    }
  }

  function exibirCadastro(tipo_usuario: number, user: UsuarioProps) {
    let id = 0

    if (tipo_usuario === 0) id = user.id_professor ?? user.id_pessoa

    if (tipo_usuario === 1) id = user.id_deseg ?? user.id_pessoa

    if (tipo_usuario === 3) id = user.id_vigilante ?? user.id_pessoa

    setSelection(id)
    setViewOnly(true)
    setOpen(true)
  }

  function fecharCadastro() {
    setOpen(false)
    setSelection(0)
  }

  useEffect(() => {
    try {
      httpClient.get(tipoUsuario).then((response) => {
        const users = response.data[tipoUsuario]

        setUsuarios([...users, ...users])
      })
    } catch (err) {
      console.error(err)
    }
  }, [tipoUsuario])

  return (
    <PageLayout title={capitalize(tipoUsuario)}>
      <ListUsers>
        {usuarios?.map((el, index) => (
          <Card
            key={index}
            name={el.Pessoa.nome_pessoa}
            leftInfo={isVigilant ? 'Turno' : el.Pessoa.email}
            rightInfo={isVigilant ? (el.Turno ? el.Turno.nome_turno : '') : ''}
            removeDisabled={tipoUsuario === 'professor'}
            onEdition={() => exibirCadastro(el.Pessoa.tipo_usuario, el)}
          />
        ))}
      </ListUsers>

      {tipoUsuario !== 'professor' && (
        <Button type="button" name="criarUsuario" onClickFunction={abrirCadastro}>
          Cadastrar {capitalize(tipoUsuario)}
        </Button>
      )}

      <Modal
        visible={open}
        close={() => fecharCadastro()}
        title={(!viewOnly ? 'Novo ' : '') + capitalize(tipoUsuario)}
      >
        {tipoUsuario === 'professor' && <FormTeacher viewOnly={viewOnly} id_usuario={selection} />}
        {tipoUsuario === 'deseg' && <FormDeseg viewOnly={viewOnly} id_usuario={selection} />}
        {isVigilant && <FormVigilant viewOnly={viewOnly} id_usuario={selection} />}
      </Modal>
    </PageLayout>
  )
}
