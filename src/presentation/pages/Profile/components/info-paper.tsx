import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import { Icon } from '../../../components'
import { IconName } from '../../../components/icon'

import twitchLogo from '../../../../../assets/twitch.png'

type Props = {
  label: string
  text: string
  image?: boolean
}

const InfoPaper: React.FC<Props> = ({label, text, image = false}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {image 
        ? <Image style={styles.image} source={twitchLogo} /> 
        : <View style={{position: 'absolute', left: 15}}>
            <Icon name={IconName.person} color='#999999' />
          </View>
}
        <Text style={styles.text}>{text}</Text>
      </View>
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
  }
})

export default InfoPaper
