import React from 'react'
import { Form } from 'formik'
import {
  FormBody,
  FormLine,
  InputField,
  FormFooter,
  PasswordField,
  Button,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

type FormDesegFieldsProps = {
  viewOnly?: boolean
}

export const FormDesegFields = ({ viewOnly }: FormDesegFieldsProps) => {
  return (
    <Form>
      <FormBody>
        <FormLine>
          <InputField name="nome_pessoa" label="Nome" disabled={viewOnly} />
        </FormLine>
        <FormLine mt="16px">
          <InputField name="email" label="Email" disabled={viewOnly} />
        </FormLine>
        <FormLine mt="16px">
          <InputField name="matricula" label="Matricula" disabled={viewOnly} />
        </FormLine>

        {!viewOnly && (
          <FormLine mt="16px">
            <PasswordField name="senha" label="Senha" />
          </FormLine>
        )}
      </FormBody>

      <FormFooter mt="3rem">
        <Button name="cadastroButton" disabled={viewOnly}>
          {viewOnly ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </FormFooter>
    </Form>
  )
}
