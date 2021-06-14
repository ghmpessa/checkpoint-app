import React from 'react'
import { Group } from '../../../../presentation/pages'
import { makeRemoteJoinGroup } from '../../usecases'

export const makeGroup: React.FC = () => {
  return (
    <Group 
      joinGroup={makeRemoteJoinGroup()}
    />
  )
}