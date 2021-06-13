import React from 'react'
import { Profile } from '../../../../presentation/pages'
import { makeRemoteEditAccount, makeRemoteLoadAccount } from '../../usecases'

export const makeProfile: React.FC = () => {
  return (
    <Profile
      loadAccount={makeRemoteLoadAccount()}
      editAccount={makeRemoteEditAccount()}
    />
  )
}

export default makeProfile
