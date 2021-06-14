import React, { useContext } from 'react'
import {Image, StyleSheet, Text, View, TextInput} from 'react-native'

import { Icon } from '../../../components'
import { IconName } from '../../../components/icon'
import { ProfileContext } from '../../../contexts'

import twitchLogo from '../../../../../assets/twitch.png'

type Variant = 'name' | 'email' | 'twitch'

type Props = {
  variant?: Variant
  text: string
  edit?: boolean
}

const InfoPaper: React.FC<Props> = ({variant, text, edit}: Props) => {

  const getVariant = (): any => {
    switch (variant) {
      case 'email': 
        return (
          <View style={[styles.content, edit && {borderColor: '#49ff00'}]}>
            <View style={{position: 'absolute', left: 15}}>
              <Icon name={IconName.email} color='#999999' />
            </View>
            <Text style={styles.text}>{text}</Text>
          </View>
        )

      case 'name':
        return (
          <View style={[styles.content, edit && {borderColor: '#49ff00'}]}>
            <View style={{position: 'absolute', left: 15}}>
              <Icon name={IconName.person} color='#999999' />
            </View>
            <Text style={styles.text}>{text}</Text>
          </View>
        )
        
      case 'twitch': 
        return (
          <View style={styles.content}>
            <Image style={styles.image} source={twitchLogo} />
            <Text style={styles.text}>{text}</Text>
          </View>
        )
    }
  }

  return (
    <View style={[styles.container, edit && { borderColor: '#49ff00', shadowColor: '#49ff00' }]}>
      {getVariant()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 1,
    shadowColor: '#ffffff',
    marginVertical: 10,
    borderColor: '#ffffff',
    borderRadius: 4
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#ffffff',
    borderWidth: 0.5,
    padding: 15
  },
  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    marginRight: 10,
    position: 'absolute',
    left: 10
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#ffffff'
  },
  image: {
    position: 'absolute',
    left: 5
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: 20,
    width: '100%',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    textDecorationLine: 'none'
  }
})

export default InfoPaper
