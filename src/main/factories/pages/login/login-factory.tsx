import React from 'react'
import { Login } from '../../../../presentation/pages'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
    />
  )
}

export default makeLogin
