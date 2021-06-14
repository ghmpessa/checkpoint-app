import React from 'react'
import { Profile } from '../../../../presentation/pages'
import { makeRemoteEditAccount, makeRemoteLoadMe, makeRemoteLoadMyGroups } from '../../usecases'

export const makeProfile: React.FC = () => {
  return (
    <Profile
      loadMe={makeRemoteLoadMe()}
      editAccount={makeRemoteEditAccount()}
      loadMyGroups={makeRemoteLoadMyGroups()}
    />
  )
}

export default makeProfile
