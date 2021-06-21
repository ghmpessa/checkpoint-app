import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet,ScrollView, TextInput, Alert } from 'react-native'

import { IconName } from '../../components/icon'
import { Avatar, Button, IconButton, Load } from '../../components'
import InfoPaper, { UserInfos } from './components/info-paper'
import GameCard, { GameLogos } from './components/game-card'
import { ApiContext, ProfileContext } from '../../contexts'
import { EditAccount, LoadAccount, LoadMe, LoadMyGroups } from '@/domain/usecases'
import { useState } from 'react'
import { GroupModel, ProfileModel } from '@/domain/models'
import GroupCard from './components/group-card'
import { useNavigation } from '@react-navigation/native'

type Props = {
  loadMe: LoadMe
  editAccount: EditAccount
  loadMyGroups: LoadMyGroups
}

const Profile: React.FC<Props> = ({ loadMe, editAccount, loadMyGroups }: Props) => {
  const { getCurrentAccount } = useContext(ApiContext)

  const userInfos = ['name', 'email', 'twitch', 'steam']

  const [loading, setLoading] = useState({
    page: true,
    edit: false
  })
  const [user, setUser] = useState<ProfileModel>({
    id: '',
    name: '',
    username: '',
    email: '',
    avatarPath: '',
    createdAt: '',
    updatedAt: '',
    twitch: '',
    steam: ''
  })
  const [groups, setGroups] = useState<GroupModel[]>([])

  const [editedUser, setEditedUser] = useState<ProfileModel>({
    twitch: '',
    steam: ''
  })

  const [edit, setEdit] = useState(false)

  const navigation = useNavigation()

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
    loadMe.load()
      .then(profileData => {
        setUser({steam: 'A', ...profileData})
        setLoading({...loading, page: false})
      })
      .catch(error => {
        setLoading({...loading, page: false})
        Alert.alert('Error!', error.message)
      })
  }, [])

  useEffect(() => {
    loadMyGroups.load()
      .then(groups => {
        setGroups(groups)
        setLoading({...loading, page: false})
      })
      .catch(error => {
        setLoading({...loading, page: false})
        Alert.alert('Error!', error.message)
      })
  }, [])

  const handleClick = async (): Promise<void> => {
    try {
      if(loading.edit) {
        return
      }
      setLoading({...loading, edit: true})

      const profileData = await editAccount.edit(editedUser)
      setUser(profileData)

      setLoading({...loading, edit: false})

      Alert.alert('Done!', 'Your profile is up to date!', [
        {
          text: 'OK',
          onPress: () => {
            setEdit(!edit)
            setEditedUser(null)
          }
        }
      ])

    } catch (error) {
      setLoading({...loading, edit: false})
      Alert.alert('Error!', error.message)
    }
  }

  if (loading.page) {
    return <Load />
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileContext.Provider value={{ editedUser, setEditedUser }}>
        <View style={styles.profileHeader}>
            <IconButton style={styles.config} iconName={IconName.configs} color='transparent' iconColor='#ffffff' onPress={() => setEdit(!edit)} />
          <Avatar level={user.level} color='#000000' label={user.name.slice(0, 1)} size={120} badgeSize={30} badgeColor='#49ff00' />
          { edit 
          ? <TextInput
              style={styles.input}
              defaultValue={user.username}
              onChangeText={username => setEditedUser({ ...editedUser, username })}

            />
          : <Text style={styles.name}>{user.username}</Text>}
        </View>

        <View style={styles.content}>
          {
            userInfos.map(info => (
              <InfoPaper variant={info} text={user[info]} edit={edit} handleClick={() => setEdit(true)} />
            ))
          }

          { edit && <Button title='save' buttonHeight={50} fontSize={24} loading={loading.edit} onPress={handleClick} />}

          <Text style={styles.gamesTitle}>my games</Text>
          <View style={{flex: 1}}>
            {games.map(game => (
              <GameCard info={game}/>
            ))}
          </View>

          <Text style={styles.gamesTitle}>my groups</Text>
          <View style={{flex: 1}}>
            {groups.map(group => (
              <GroupCard handleClick={() => navigation.navigate('Group', { group })} group={group} />
            ))}
          </View>

        </View>
      </ProfileContext.Provider>
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
