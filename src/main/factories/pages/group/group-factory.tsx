import React from 'react'
import { Group } from '../../../../presentation/pages'
import { makeRemoteJoinGroup, makeRemoteLoadMembers, makeRemoteLoadPosts } from '../../usecases'

export const makeGroup: React.FC = () => {
  return (
    <Group 
      joinGroup={makeRemoteJoinGroup()}
      loadMembers={makeRemoteLoadMembers()}
      loadPosts={makeRemoteLoadPosts()}
    />
  )
}