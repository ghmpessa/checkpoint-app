import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet,ScrollView, FlatList, Alert } from 'react-native'

import { IconName } from '../../components/icon'
import { Avatar, IconButton, Load } from '../../components'
import InfoPaper from './components/info-paper'
import GameCard, { GameLogos } from './components/game-card'
import { ApiContext } from '../../contexts'
import { LoadAccount } from '@/domain/usecases'
import { useState } from 'react'
import { ProfileModel } from '@/domain/models'

type Props = {
  loadAccount: LoadAccount
}

const Profile: React.FC<Props> = ({ loadAccount }: Props) => {
  const { getCurrentAccount } = useContext(ApiContext)

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

  const games = [
  {
    nick: '.G',
    rank: 'Global',
    team: 'Inatel',
    game: GameLogos.cs
  },
  {
    nick: 'gezpot',
    rank: 'Radiant',
    team: 'Inatel',
    game: GameLogos.valorant
  }]

  useEffect(() => {
    getCurrentAccount()
      .then(currentAccount => {
        loadAccount.load(currentAccount.userId)
          .then(profileData => {
            setUser(profileData)
            setLoading(false)
          })
        .catch(error => {
          setLoading(false)
          Alert.alert('Error!', error.message)
        })
      })
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
          <IconButton style={styles.config} iconName={IconName.configs} color='transparent' iconColor='#ffffff' />
        <Avatar color='#000000' label={user.name.slice(0, 1)} size={120} badgeSize={30} badgeColor='#49ff00' />
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
          text={'twitch.tv/gzpott'}
        />
        <Text style={styles.gamesTitle}>my games</Text>

        <View style={{flex: 1}}>
          {games.map(game => (
            <GameCard info={game} />
          ))}
        </View>

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
    alignItems: 'center',
    padding: 15
  },
  name: {
    fontSize: 36,
    color: '#f2f2f2',
    opacity: 0.9,
    fontFamily: 'Montserrat-Bold'
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
  }
})

export default Profile
