import React, { useState } from 'react'
import { Button, Input } from '../../components'
import { FlatList, StyleSheet, View, Alert, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper'

import {CommunityContext} from '../../contexts'
import CreateGroupModal from './components/create-group-modal'
import { IconName } from '../../components/icon'
import { CreateGroup, LoadGroups } from '../../../domain/usecases'
import GroupCard, { GameLogos } from './components/group-card'
import { Fragment } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GroupModel } from '@/domain/models'
import { useEffect } from 'react'

type Props = {
  createGroup: CreateGroup
  loadGroups: LoadGroups
}

const Home: React.FC<Props> = ({ createGroup, loadGroups }: Props) => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [groups, setGroups] = useState<GroupModel[]>([])
  const [group, setGroup] = useState({
    name: '',
    description: '',
    game: ''
  })

  const navigation = useNavigation()

  const handleCreate = async (): Promise<void> => {
    try {
      if (loading) {
        return
      }
      setLoading(true)
      createGroup.create(group)
      setLoading(false)

      Alert.alert('Done!' , 'Your group has been created!')
      setVisible(!visible)

    } catch (error) {
      setLoading(false)
      Alert.alert('Error!', error.message)
    }
  }

  const handleClick = (group: GroupModel): void => {
    navigation.navigate('Group', { group })
  }

  const handleSearch = async (): Promise<void> => {
    try {
      if (loading) {
        return
      }

      setLoading(true)
      const groups = await loadGroups.load({ search })
      setGroups(groups)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      Alert.alert('Error!', error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Input
        mode='outlined'
        style={styles.search}
        placeholder='find groups...'
        onChangeText={text => setSearch(text)}
        right={
          <TextInput.Icon
            name='magnify'
            color='#ffffff'
            size={25}
            onPress={handleSearch}
          />
        }
      />

      <View style={styles.buttonWrap}>
        <Button
          title='create group'
          buttonHeight={50}
          fontSize={25}
          onPress={() => setVisible(true)}
        />
      </View>

      <View style={styles.list}>
        {
        !loading 
          ? <FlatList
              data={groups}
              keyExtractor={group => group.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <GroupCard handleClick={() => handleClick(item)} group={item} game={GameLogos.valorant} />
                )}
              />
          : <ActivityIndicator color='#40A900' size={30} />
        }
      </View>
      <CommunityContext.Provider value={{ visible, setVisible, group, setGroup }}>
        <CreateGroupModal handlePress={handleCreate} />
      </CommunityContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  search: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold'
  },
  buttonWrap: {
    margin: 10
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 0.2,
    borderTopColor: '#c2c2c2',
    elevation: 0.5
  },
  button: {
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40A900',
    marginHorizontal: 10,
    margin: 10,
    padding: 10
  }
})

export default Home
