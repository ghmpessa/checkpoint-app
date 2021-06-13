import React from 'react'
import { Login } from '../../../../presentation/pages'
import { makeRemoteAuthentication } from '../../usecases'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
    />
  )
}

export default makeLogin
