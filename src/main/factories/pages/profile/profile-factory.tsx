import React from 'react'
import { Profile } from '../../../../presentation/pages'
import { makeRemoteLoadAccount } from '../../usecases'

export const makeProfile: React.FC = () => {
  return (
    <Profile
      loadAccount={makeRemoteLoadAccount()}
    />
  )
}

export default makeProfile
