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
  const isTeacher = tipoUsuario === 'professor'

  const [usuarios, setUsuarios] = useState<UsuarioProps[]>()

  const [open, setOpen] = useState(false)
  const [viewOnly, setViewOnly] = useState(false)
  const [selection, setSelection] = useState(0)
  const usuariosList = usuarios || []

  function abrirCadastro() {
    if (tipoUsuario !== 'professor') {
      setViewOnly(false)
      setOpen(true)
    }
  }

  function exibirCadastro(tipo_usuario: number, user: UsuarioProps) {
    let id = 0

    if (tipo_usuario === 0) id = user.id_professor || user.id_pessoa

    if (tipo_usuario === 1) id = user.id_deseg || user.id_pessoa

    if (tipo_usuario === 3) id = user.id_vigilante || user.id_pessoa

    setSelection(id)
    setViewOnly(true)
    setOpen(true)
  }

  function fecharCadastro() {
    setOpen(false)
    setSelection(0)
  }

  async function loadUserByType() {
    await httpClient
      .get(tipoUsuario)
      .then((response) => {
        const users = response.data[tipoUsuario] || []

        setUsuarios(users)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function getRightInfo(user: UsuarioProps) {
    if (isVigilant || !user.Turno) {
      return ''
    }

    return user.Turno.nome_turno
  }

  useEffect(() => {
    loadUserByType()
  }, [tipoUsuario])

  return (
    <PageLayout title={capitalize(tipoUsuario)}>
      <ListUsers>
        {usuariosList.map((el, index) => (
          <Card
            key={index}
            name={el.Pessoa.nome_pessoa}
            leftInfo={isVigilant ? 'Turno' : el.Pessoa.email}
            rightInfo={getRightInfo(el)}
            removeDisabled={isTeacher}
            onEdition={() => exibirCadastro(el.Pessoa.tipo_usuario, el)}
          />
        ))}
      </ListUsers>

      {!isTeacher && (
        <Button type="button" name="criarUsuario" onClickFunction={abrirCadastro}>
          Cadastrar {capitalize(tipoUsuario)}
        </Button>
      )}

      <Modal
        visible={open}
        close={fecharCadastro}
        title={(viewOnly ? '' : 'Novo ') + capitalize(tipoUsuario)}
      >
        {isTeacher && <FormTeacher viewOnly={viewOnly} id_usuario={selection} />}
        {tipoUsuario === 'deseg' && <FormDeseg viewOnly={viewOnly} id_usuario={selection} />}
        {isVigilant && <FormVigilant viewOnly={viewOnly} id_usuario={selection} />}
      </Modal>
    </PageLayout>
  )
}
