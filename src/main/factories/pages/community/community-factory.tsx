import React from 'react'

import {Community} from '../../../../presentation/pages'
import { makeRemoteCreateGroup, makeRemoteLoadGroups } from '../../usecases'

export const makeCommunity: React.FC = () => {
  return (
    <Community 
      createGroup={makeRemoteCreateGroup()}
      loadGroups={makeRemoteLoadGroups()}
    />
  )
}