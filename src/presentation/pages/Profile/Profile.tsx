import React from 'react'
import { Text, View, StyleSheet,ScrollView, FlatList } from 'react-native'

import { IconName } from '../../components/icon'
import { Avatar, IconButton } from '../../components'
import InfoPaper from './components/info-paper'
import GameCard, { GameLogos } from './components/game-card'

const Profile: React.FC = () => {
  const games = [
  {
    nick: 'FalleN',
    rank: 'Global',
    team: 'Team Liquid',
    game: GameLogos.cs
  },
  {
    nick: 'FalleN',
    rank: 'Radiant',
    team: 'Team Liquid',
    game: GameLogos.valorant
  },
  {
    nick: 'FalleN',
    rank: 'Predator',
    team: 'Team Liquid',
    game: GameLogos.lol
  }]
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
          <IconButton style={styles.config} iconName={IconName.configs} color='transparent' iconColor='#ffffff' />
        <Avatar color='#000000' label='V' size={120} badgeSize={30} badgeColor='#49ff00' />
        <Text style={styles.name}>O Verdadeiro</Text>
      </View>

      <View style={styles.content}>
        <InfoPaper
          label='name'
          text='Gabriel Toledo'
          image={false}
        />
        <InfoPaper
          label='twitch'
          text='twitch.tv/gafallen'
          image
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
