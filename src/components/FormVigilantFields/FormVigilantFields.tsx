import React from 'react'
import { Form } from 'formik'

import MenuItem from '@material-ui/core/MenuItem'

import {
  FormBody,
  FormLine,
  InputField,
  PasswordField,
  FormFooter,
  Button,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import { TurnoValues } from 'types/User'

type FormVigilantFieldsProps = {
  viewOnly?: boolean
  turnos: TurnoValues[]
}

export const FormVigilantFields = ({ turnos, viewOnly }: FormVigilantFieldsProps): JSX.Element => {
  return (
    <Form>
      <FormBody>
        <FormLine>
          <InputField name="nome_pessoa" label="Nome" />
        </FormLine>
        <FormLine>
          <InputField name="matricula" label="Matricula" />
        </FormLine>
        <FormLine mt="1rem" mb="1rem">
          <InputField name="turno" label="Turno" select>
            {turnos?.map((turno) => (
              <MenuItem key={turno.id_turno} value={turno.id_turno}>
                {turno.nome_turno}
              </MenuItem>
            ))}
          </InputField>
        </FormLine>
        <FormLine>
          <InputField name="email" label="Email" disabled={viewOnly} />
        </FormLine>

        {!viewOnly && (
          <FormLine>
            <PasswordField name="senha" label="Senha" />
          </FormLine>
        )}
      </FormBody>

      <FormFooter mt="3rem">
        <Button name="cadastroButton">{viewOnly ? 'Atualizar' : 'Cadastrar'}</Button>
      </FormFooter>
    </Form>
  )
}
