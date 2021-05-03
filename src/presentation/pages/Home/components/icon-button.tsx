import React from 'react'
import { StyleSheet, View } from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Icon } from '../../../../presentation/components'
import { IconName } from '../../../../presentation/components/icon'

interface Props extends RectButtonProps {
  iconName: IconName
  name?: string
  color?: string
  active?: boolean
}

const IconButton: React.FC<Props> = ({ iconName, color, name, active = false, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <RectButton rippleColor='#40A900' style={[styles.button, { backgroundColor: color }]} {...rest}>
        <Icon name={iconName} color='#40A900' size={30} />
      </RectButton>
    </View>
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
  },
  title: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    color: '#333333',
    width: 100
  }
})

export default IconButton
