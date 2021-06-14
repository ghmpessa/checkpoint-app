import React, { useContext } from 'react'
import {Image, StyleSheet, Text, View, TextInput} from 'react-native'

import { Button, Icon } from '../../../components'
import { IconName } from '../../../components/icon'
import { ProfileContext } from '../../../contexts'

import twitchLogo from '../../../../../assets/twitch.png'
import steamLogo from '../../../../../assets/steam.png'

export type UserInfos = 'name' | 'email' | 'twitch' | 'steam'

type Props = {
  variant?: string
  text: string
  edit?: boolean
  handleClick?: () => void
}

const InfoPaper: React.FC<Props> = ({variant, text, edit, handleClick}: Props) => {

  const { editedUser, setEditedUser } = useContext(ProfileContext)

  const getVariant = (): any => {
    switch (variant) {
      case 'email': 
        return (
          <View style={{position: 'absolute', left: 15}}>
            <Icon name={IconName.email} color='#999999' />
          </View>
      )

      case 'name':
        return (
          <View style={{position: 'absolute', left: 15}}>
            <Icon name={IconName.person} color='#999999' />
          </View>
        )
        
      case 'twitch': 
        return <Image style={styles.image} source={twitchLogo} />

      case 'steam':
        return <Image style={styles.image} source={steamLogo} />
      
    }
  }

  if (edit) {
    return (
      <View style={[styles.container, edit && { borderColor: '#49ff00', shadowColor: '#49ff00' }]}>
        <View style={[styles.content, edit && {borderColor: '#49ff00'}]}>
          {getVariant()}
          <TextInput 
            style={styles.input}
            defaultValue={text}
            onChangeText={input => setEditedUser({ ...editedUser, [variant]: input })}
          />
        </View>
      </View>
    )
  }

  if (!text.length) {
    return (
      <></>
    )
  }

  return (
    <View style={[styles.container, edit && { borderColor: '#49ff00', shadowColor: '#49ff00' }]}>
      <View style={styles.content}>
        {getVariant()}
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
    justifyContent: 'flex-start',
    borderColor:'#ffffff',
    borderWidth: 0.5,
    padding: 15,
    paddingLeft: 60
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
    fontSize: 16,
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
    textDecorationLine: 'none'
  }
})

export default InfoPaper
