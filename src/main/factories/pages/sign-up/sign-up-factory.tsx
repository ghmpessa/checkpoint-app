import React from 'react'
import { SignUp } from '../../../../presentation/pages'
import { makeRemoteAddAccount } from '../../usecases'
import { makeSignUpValidation } from './sign-up-validation-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      validation={makeSignUpValidation()}
      addAccount={makeRemoteAddAccount()}
    />
  )
}

export default makeSignUp
