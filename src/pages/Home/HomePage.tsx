import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Header,
  Modal,
  Button,
  ButtonDeseg,
  ButtonProfessor,
  ButtonVigilante,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import { FormReport } from 'components/FormReport'
import { FormDepartment } from 'components/FormDepartment'

import * as S from './HomePage.styles'

export const HomePage = (): JSX.Element => {
  const history = useHistory()
  const user: any = null
  // const { user } = useContext(AuthContext);

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

  function handleSignOut() {
    console.log('>>> user sign out')
  }

  return (
    <S.HomeSection>
      <Header home header="Home" signOut={handleSignOut} />

      <S.Content>
        <S.Card>
          <div>
            <img src="Ellipse 2.png" alt="Avatar" />
          </div>
          <strong>{user?.pessoa?.nome_pessoa}</strong>
          <span>
            Matrícula:{' '}
            <strong>
              {(user?.deseg && user?.deseg?.matricula) ||
                (user?.professor && user?.professor?.matricula) ||
                (user?.vigilante && user?.vigilante?.matricula)}
            </strong>
          </span>
        </S.Card>

        <S.ButtonWrapper>
          {user?.deseg && <ButtonDeseg onClickLeft={abrirRelatorio} onClickRight={abrirCadastro} />}
          {user?.professor && <ButtonProfessor />}
          {user?.vigilante && <ButtonVigilante />}
        </S.ButtonWrapper>

        <Modal
          visible={openRelatorio}
          title="Geração de Relatório"
          close={() => setRelatorio(false)}
        >
          <S.VerticalButtonWrapper>
            <FormReport />
          </S.VerticalButtonWrapper>
        </Modal>

        <Modal visible={openDeseg} title="Cadastros" close={() => setOpenDeseg(false)}>
          {/* não sei se é a melhor solução, criar um vertical*/}
          <S.VerticalButtonWrapper>
            <Button type="button" name="desegButton" path="/usuarios/deseg">
              DESEG
            </Button>
            <Button type="button" name="professoresButton" path="/usuarios/professor">
              Professores
            </Button>
            <Button type="button" name="vigilantesButton" path="/usuarios/vigilante">
              Vigilantes
            </Button>
          </S.VerticalButtonWrapper>
        </Modal>

        <Modal visible={open || user?.professor?.id_departamento === 0}>
          <h2>Professor, por favor selecione sua coordenação.</h2>
          <br />
          <FormDepartment user={user} onConfirm={atualizar} />
        </Modal>
      </S.Content>
    </S.HomeSection>
  )
}
