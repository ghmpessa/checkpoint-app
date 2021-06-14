import React from 'react'
import { MemberProfile } from '../../../../presentation/pages'
import { makeRemoteLoadAccount } from '../../usecases'

export const makeMemberProfile: React.FC = () => {
  return (
    <MemberProfile
      loadAccount={makeRemoteLoadAccount()}
    />
  )
}

export default makeMemberProfile
