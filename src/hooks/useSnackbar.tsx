import React, { useState } from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import Alert, { AlertProps } from '@material-ui/lab/Alert'

export const useSnackbar = () => {
  const [state, setState] = useState({ message: '', severity: 'default' })

  const open = !!state.message

  const resetSnackbar = () => {
    setState({ message: '', severity: 'default' })
  }

  const setSnackbar = (message: string, severity?: AlertProps['severity']) => {
    setState((prevState) => ({ message, severity: severity || prevState.severity }))
  }

  const SnackbarComponent = () => (
    <Snackbar open={open}>
      <Alert elevation={6} variant="filled" severity={state.severity as AlertProps['severity']}>
        {state.message}
      </Alert>
    </Snackbar>
  )

  return {
    open,
    Snackbar: SnackbarComponent,
    setSnackbar: setSnackbar,
    resetSnackbar,
  }
}
