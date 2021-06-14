import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, FlatList, Alert } from 'react-native'

import { Button, Load } from '../../components'

import valorant from '../../../../assets/valorant.png'
import PostCard from '../Home/components/post-card'
import { JoinGroup } from '@/domain/usecases'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GroupModel } from '../../../domain/models'

type Props = {
  joinGroup: JoinGroup
}

interface Params {
  group: GroupModel
}

const Group: React.FC<Props> = ({ joinGroup }: Props) => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(true)

  const { group } = useRoute().params as Params

  const handleJoin = async (): Promise<void> => {
    try {
      joinGroup.join({
        bind: true,
        groupId: 'aaaa'
      })
    } catch (error) {
      Alert.alert('Error!', error.message)
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={valorant} />
        <Text style={styles.title}>{group.name}</Text>
        <Text style={styles.subtitle}>{`#${group.tag}`}</Text>
        <Text style={styles.subtitle}>{`Created at: ${new Date(group.createdAt).toLocaleDateString()}`}</Text>
        <Button 
          handleClick={handleJoin}
          title='join group'
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item }) => (
            <PostCard />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: '#f1f1f1',
    textAlign: 'center',
    marginVertical: 5
  },
  subtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
    marginVertical: 5
  },
  image: {
    height: 110,
    width: 110,
    alignSelf: 'center'
  },
  header: {
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    elevation: 5,
    shadowColor: '#ffffff',
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    marginBottom: 10
  }
})

export default Group
