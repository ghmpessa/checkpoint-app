import React, { useEffect } from 'react'
import { Text, View, StyleSheet,ScrollView, TextInput, Alert } from 'react-native'

import { IconName } from '../../components/icon'
import { Avatar, Button, IconButton, Load } from '../../components'
import { EditAccount, LoadAccount } from '@/domain/usecases'
import { useState } from 'react'
import { ProfileModel } from '@/domain/models'
import InfoPaper from './components/info-paper'
import { useNavigation, useRoute } from '@react-navigation/native'

type Props = {
  loadAccount: LoadAccount
}

interface Params {
  userId: string
}

const Profile: React.FC<Props> = ({ loadAccount }: Props) => {

  const navigation = useNavigation()

  const { userId } = useRoute().params as Params

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<ProfileModel>({
    id: '',
    name: '',
    username: '',
    email: '',
    avatarPath: '',
    createdAt: '',
    updatedAt: ''
  })

  useEffect(() => {
    loadAccount.load(userId)
      .then(account => {
        setUser(account)
        setLoading(false)
      })
      .catch(error => [
        Alert.alert('Error!', error.message)
      ])
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.profileHeader}>
          <Avatar level={user.level} color='#000000' label={user.name.slice(0, 1)} size={120} badgeSize={30} badgeColor='#49ff00' />
          <Text style={styles.name}>{user.username}</Text>
        </View>

        <View style={styles.content}>
          <InfoPaper
            variant='name'
            text={user.name}
          />
          <InfoPaper
            variant='email'
            text={user.email}
          />
          <InfoPaper
            variant='twitch'
            text={user.twitch}
          />
          <InfoPaper
            variant='steam'
            text={user.steam}
          />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  profileHeader: {
    backgroundColor: '#303030',
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    padding: 15
  },
  name: {
    fontSize: 36,
    color: '#f2f2f2',
    opacity: 0.9,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center'
  },
  config: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  content: {
    flex: 1,
    padding: 15
  },
  gamesTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    marginVertical: 20
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#40A900',
    margin: 20,
    textDecorationLine: 'none'
  }
})

export default Profile
