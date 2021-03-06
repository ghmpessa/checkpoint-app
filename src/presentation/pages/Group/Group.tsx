import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, FlatList, Alert, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'

import { Button, Load } from '../../components'

import icon from '../../../../assets/generic.png'
import PostCard from './components/post-card'
import { AddPost, JoinGroup, LoadMembers, LoadPosts } from '@/domain/usecases'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GroupModel, PostModel, ProfileShortModel } from '../../../domain/models'
import MemberCard from './components/member-card'
import { GroupContext } from '../../contexts'
import PostModal from './components/post-modal'
import { Fragment } from 'react'

type Props = {
  joinGroup: JoinGroup
  loadMembers: LoadMembers
  loadPosts: LoadPosts
  addPost: AddPost
}

interface Params {
  group: GroupModel
}

const Group: React.FC<Props> = ({ joinGroup, loadMembers, loadPosts, addPost }: Props) => {
  const navigation = useNavigation()

  const [joined, setJoined] = useState(false)
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState({
    page: true,
    feed: false,
    post: false
  })
  const [selected, setSelected] = useState({
    feed: true,
    members: false
  })
  const [members, setMembers] = useState<ProfileShortModel[]>([])
  const [posts, setPosts] = useState<PostModel[]>([])

  const { group } = useRoute().params as Params

  const handleJoin = async (): Promise<void> => {
    try {
      setJoined(!joined)
      joinGroup.join({
        bind: !joined,
        groupId: group.id
      })
    } catch (error) {
      Alert.alert('Error!', error.message)
    }
  }

  const handleMembers = async (): Promise<void> => {
    try {
      if (loading.feed || selected.members) {
        return
      }
      setLoading({...loading, feed: true})
      setSelected({feed:false, members: true})
      const members = await loadMembers.load(group.id)
      setMembers(members)
      setLoading({...loading, feed: false})
    } catch (error) {
      setLoading({...loading, feed: false})
      Alert.alert('Error!', error.message)
    }
  }

  const fetchPosts = async (loadType: string = 'page'): Promise<void> => {
    try {
      const posts = await loadPosts.load(group.id)
      setPosts(posts.reverse())
      setLoading({...loading, [loadType]: false})
    } catch (error) {
      setLoading({...loading, [loadType]: false})
      Alert.alert('Error!', error.message)
    }
  }

  const handleClick = (): void => {
    setSelected({members: false, feed: true})
    setLoading({...loading, feed: true})
    fetchPosts('feed')
  }

  const handlePost = async (): Promise<void> => {
    try {
      if (loading.post) {
        return
      }

      setLoading({...loading, post: true})
      await addPost.post({
        text,
        groupId: group.id
      })
      setVisible(!visible)
      setLoading({ ...loading, feed: true })
      fetchPosts('feed')
      setLoading({...loading, post: false})
    } catch (error) {
      setLoading({...loading, post: false})
      Alert.alert('Error!', error.message)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading.page) {
    return <Load />
  }

  return (
    <SafeAreaView style={styles.container}>
      <GroupContext.Provider value={{ visible, setVisible, text, setText, loading, setLoading }}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image style={styles.image} source={icon} />
            <Text style={styles.title}>{group.name}</Text>
            <Text style={styles.subtitle}>{`#${group.tag}`}</Text>
            <Text style={styles.subtitle}>{`Created at: ${new Date(group.createdAt).toLocaleDateString()}`}</Text>
            <Button 
              handleClick={handleJoin}
              title={joined ? 'quit group' : 'join group'}
            />
          </View>
          <View style={styles.buttonsWrap}>
            <TouchableOpacity onPress={handleClick} style={styles.buttonLeft}>
              <Text style={[styles.buttonsText, selected.feed && {color: '#49ff00'}]}>feed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMembers} style={styles.buttonRight}>
              <Text style={[styles.buttonsText, selected.members &&  {color: '#49ff00'}]}>members</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1}}>
            {loading.feed
              ? <ActivityIndicator color='#49ff00' size={30} /> 
                : selected.feed 
                  ? <>
                  <Button title='add post' text style={styles.addPostButton} onPress={() => setVisible(!visible)} />
                    {posts.map(item => (
                      <Fragment key={item.id}>
                        <PostCard post={item} />
                      </Fragment>
                    ))}
                  </>
                  : members.map(member => (
                    <Fragment key={member.id}>
                     <MemberCard member={member} handleClick={() => navigation.navigate('MemberProfile', { userId: member.id })} />
                    </Fragment>
                  ))}
          </View>
        </ScrollView>
        <PostModal handlePost={handlePost} />
      </GroupContext.Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#161616'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#f1f1f1',
    textAlign: 'center',
    marginVertical: 5
  },
  subtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginVertical: 5
  },
  image: {
    height: 64,
    width: 64,
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
  },
  buttonsWrap: {
    flexDirection: 'row',
    padding: 10,
    width: '100%'
  },
  buttonLeft: {
    borderRightWidth: 1,
    borderLeftColor: '#666666',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    borderLeftWidth: 1,
    borderLeftColor: '#666666',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#f2f2f2'
  },
  addPostButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#49ff00',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 10
  }
})

export default Group
