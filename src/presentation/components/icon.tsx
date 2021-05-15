import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export enum IconName {
  configs = 'cog',
  group = 'account-multiple',
  home = 'home',
  list = 'format-list-bulleted',
  share = 'share-variant',
  comment = 'message-reply',
  account = 'account-circle',
  person = 'account',
  exit = 'exit-to-app',
  back = 'arrow-left',
  arrowDown = 'chevron-down'
}

type Props = {
  name: IconName
  size?: number
  color?: string
}

const Icon: React.FC<Props> = ({ name, size = 30, color = '#666666', ...props }: Props) => {
  return (
    <MaterialCommunityIcons
      size={size}
      name={name}
      color={color}
    />
  )
}

export default Icon
