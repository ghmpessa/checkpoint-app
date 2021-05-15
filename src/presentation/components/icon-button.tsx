import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Icon } from '../components'
import { IconName } from './icon'

interface Props extends TouchableOpacityProps {
  iconName: IconName
  iconColor?: string
  color?: string
  handleClick?: () => void
}

const IconButton: React.FC<Props> = ({ iconName, color, iconColor, handleClick, ...rest }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.button, { backgroundColor: color }]} {...rest}>
      <Icon name={iconName} color={iconColor} size={30} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  }
})

export default IconButton
