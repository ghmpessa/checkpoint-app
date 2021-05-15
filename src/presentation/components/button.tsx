import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  title: string
  text?: boolean
  fontSize?: number
  buttonHeight?: number,
  handleClick?: () => void
}

const Button: React.FC<Props> = ({ title, text = false, fontSize = 20, buttonHeight, handleClick, ...rest }: Props) => {
  return (
    <RectButton
      style={text ? styles.textButton : [styles.container, buttonHeight && { height: buttonHeight }]}
      onPress={handleClick}
      {...rest}
    >
      <Text style={[styles.text, text && styles.textColor, { fontSize: fontSize }]}>{title}</Text>
    </RectButton >
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 32,
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
