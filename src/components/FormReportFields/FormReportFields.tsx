import React from 'react'
import { Form } from 'formik'

import {
  FormBody,
  FormLine,
  FormFooter,
  Button,
  InputField,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'
import FormLabel from '@material-ui/core/FormLabel'

export const FormReportFields = () => {
  return (
    <Form>
      <FormBody>
        <FormLine mb="2rem">
          <FormLabel>Data Inicio</FormLabel>
          <InputField name="data_inicio" type="date" />
        </FormLine>
        <FormLine>
          <FormLabel>Data Fim</FormLabel>
          <InputField name="data_final" type="date" />
        </FormLine>

        <FormFooter mt="3rem">
          <Button name="loginButton">Gerar Relatório</Button>
        </FormFooter>
      </FormBody>
    </Form>
  )
}
