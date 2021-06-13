import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Icon } from '.'
import { IconName } from './icon'

interface Props extends TouchableOpacityProps {
  title: string
  text?: boolean
  fontSize?: number
  buttonHeight?: number,
  handleClick?: () => void,
  icon?: IconName
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<Props> = ({ title, text = false, fontSize = 20, buttonHeight, handleClick, icon, disabled = false, loading = false, ...rest }: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      style={text ? styles.textButton : [styles.container, buttonHeight && { height: buttonHeight }, disabled && {backgroundColor: '#c2c2c2'}]}
      onPress={handleClick}
      {...rest}
    >
      {icon && <Icon name={icon} size={25} color='#ffffff'/>}
      { loading ? <ActivityIndicator size='small' color='#fff' /> : <Text style={[styles.text, text && styles.textColor, { fontSize: fontSize }]}>{title}</Text>}
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40A900',
    marginHorizontal: 10,
    paddingHorizontal: 10
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
