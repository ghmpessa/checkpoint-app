import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Icon } from '.'
import { IconName } from './icon'

interface Props extends TouchableOpacityProps {
  title: string
  text?: boolean
  fontSize?: number
  buttonHeight?: number,
  handleClick?: () => void,
  icon?: IconName
}

const Button: React.FC<Props> = ({ title, text = false, fontSize = 20, buttonHeight, handleClick, icon, ...rest }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={text ? styles.textButton : [styles.container, buttonHeight && { height: buttonHeight }]}
      onPress={handleClick}
      {...rest}
    >
      {icon && <Icon name={icon} size={25} color='#ffffff'/>}
      <Text style={[styles.text, text && styles.textColor, { fontSize: fontSize }]}>{title}</Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40A900',
    marginHorizontal: 10,
    padding: 10
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  textColor: {
    color: '#40A900'
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    backgroundColor: 'transparent',
    marginHorizontal: 10
  }
})

export default Button
