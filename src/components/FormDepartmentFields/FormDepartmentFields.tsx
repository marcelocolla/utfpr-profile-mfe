import React from 'react'
import { Form } from 'formik'

import { FormBody, FormLine, FormFooter, Button, InputField } from '@utfprfabricadesoftware/utfpr-lib-ui-react'
import MenuItem from '@material-ui/core/MenuItem'

import { Department } from 'domains/Department'

type FormDepartmentFieldsProps = {
  departments: Department[]
}

export const FormDepartmentFields = ({ departments }: FormDepartmentFieldsProps) => {
  return (
    <Form>
      <FormBody>
        <FormLine mt="1rem">
          <InputField select name="departamento" label="Coordenação">
            {departments?.map((dep) => (
              <MenuItem key={dep.id_departamento} value={dep.id_departamento}>
                {dep.sigla_departamento}
              </MenuItem>
            ))}
          </InputField>
        </FormLine>
      </FormBody>

      <FormFooter mt="3rem">
        <Button name="departamentoButton">Confirmar</Button>
      </FormFooter>
    </Form>
  )
}
