import React from 'react'
import { Profile } from '../../../../presentation/pages'
import { makeRemoteEditAccount, makeRemoteLoadAccount, makeRemoteLoadMyGroups } from '../../usecases'

export const makeProfile: React.FC = () => {
  return (
    <Profile
      loadAccount={makeRemoteLoadAccount()}
      editAccount={makeRemoteEditAccount()}
      loadMyGroups={makeRemoteLoadMyGroups()}
    />
  )
}

export default makeProfile
