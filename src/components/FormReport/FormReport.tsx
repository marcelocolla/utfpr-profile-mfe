import React from 'react'
import { Formik } from 'formik'
import { FormReportFields } from 'components/FormReportFields'

type FormReportProps = {
  onConfirm?: () => void
}

type RelatorioProps = {
  data_inicio: string
  data_final: string
}

export const FormReport = (props: FormReportProps) => {
  const initialValues: RelatorioProps = {
    data_inicio: '',
    data_final: '',
  }

  // Envio de dados pro backend
  function handleSubmit(values: RelatorioProps) {
    // --
    console.log('>>> values', values, props)
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <FormReportFields />
    </Formik>
  )
}
