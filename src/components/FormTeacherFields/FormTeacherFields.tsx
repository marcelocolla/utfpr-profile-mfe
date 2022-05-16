import React from 'react'
import { Form } from 'formik'
import { FormBody, FormLine, InputField } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

type FormTeacherFieldsProps = {
  viewOnly?: boolean
}

export const FormTeacherFields = ({ viewOnly }: FormTeacherFieldsProps) => {
  return (
    <Form>
      <FormBody>
        <FormLine>
          <InputField name="nome_pessoa" label="Nome" disabled={viewOnly} />
        </FormLine>
        <FormLine>
          <InputField name="email" label="Email" disabled={viewOnly} />
        </FormLine>
        <FormLine>
          <InputField name="matricula" label="Matricula" disabled={viewOnly} />
        </FormLine>
        <FormLine>
          <InputField name="departamento" label="Coordenação" disabled={viewOnly} />
        </FormLine>
      </FormBody>
    </Form>
  )
}
