import React from 'react'
import {
  Modal,
  Button,
  ButtonDeseg,
  ButtonProfessor,
  ButtonVigilante,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore'
import { FormReport } from 'components/FormReport'
import { FormDepartment } from 'components/FormDepartment'

import * as S from './HomePage.styles'

import { PageLayout } from 'components/PageLayout'
import { CardUser } from 'components/CardUser'

export const HomePage = (): JSX.Element => {
  const user = useUserStore()

  const [open, setOpen] = React.useState(false)
  const [openDeseg, setOpenDeseg] = React.useState(false)
  const [openRelatorio, setRelatorio] = React.useState(false)

  // o perfil Professor seleciona sua coordenação no primeiro login,
  // o que atualiza seu perfil e consequentemente, atualiza a página
  function atualizar() {
    setOpen(false)

    history.go(0)
  }

  // abre a opção de visualização de cadastros para o perfil DESEG
  // DESEG pode adicionar Deseg e Vigilante, e visualizar Professor
  function abrirCadastro() {
    setOpenDeseg(true)
  }

  function abrirRelatorio() {
    setRelatorio(true)
  }

  return (
    <PageLayout home title="Home">
      <CardUser name={user?.pessoa?.nome_pessoa} matricula={user.getRegistrationNumber()} />

      <Modal visible={openRelatorio} title="Geração de Relatório" close={() => setRelatorio(false)}>
        <S.VerticalButtonWrapper>
          <FormReport />
        </S.VerticalButtonWrapper>
      </Modal>

      <Modal visible={openDeseg} title="Cadastros" close={() => setOpenDeseg(false)}>
        {/* não sei se é a melhor solução, criar um vertical*/}
        <S.VerticalButtonWrapper>
          <Button type="button" name="desegButton" path="/profile/deseg">
            DESEG
          </Button>
          <Button type="button" name="professoresButton" path="/profile/professor">
            Professores
          </Button>
          <Button type="button" name="vigilantesButton" path="/profile/vigilante">
            Vigilantes
          </Button>
        </S.VerticalButtonWrapper>
      </Modal>

      <Modal visible={open || user?.professor?.id_departamento === 0}>
        <h2>Professor, por favor selecione sua coordenação.</h2>
        <br />
        <FormDepartment user={user} onConfirm={atualizar} />
      </Modal>

      <S.ButtonWrapper>
        {user?.deseg && <ButtonDeseg onClickLeft={abrirRelatorio} onClickRight={abrirCadastro} />}
        {user?.professor && <ButtonProfessor />}
        {user?.vigilante && <ButtonVigilante />}
      </S.ButtonWrapper>
    </PageLayout>
  )
}
