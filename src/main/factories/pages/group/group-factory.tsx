import React from 'react'
import { Group } from '../../../../presentation/pages'
import { makeRemoteAddPost, makeRemoteJoinGroup, makeRemoteLoadMembers, makeRemoteLoadPosts } from '../../usecases'

export const makeGroup: React.FC = () => {
  return (
    <Group 
      joinGroup={makeRemoteJoinGroup()}
      loadMembers={makeRemoteLoadMembers()}
      loadPosts={makeRemoteLoadPosts()}
      addPost={makeRemoteAddPost()}
    />
  )
}