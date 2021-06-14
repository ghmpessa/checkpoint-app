import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconName } from '../../../components/icon'

import { Button, Avatar } from '../../../components'
import IconButton from './icon-button'
import { PostModel } from '../../../../domain/models'

type Props = {
  post: PostModel
}

const PostCard: React.FC<Props> = ({ post }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Avatar label='V' size={45} badgeSize={20} badgeColor='#000000' />
        <View style={styles.headerText}>
          <Text style={styles.name}>{post.account.username}</Text>
          <Text style={styles.time}>{new Date().getHours() -  new Date(post.createdAt).getHours()}</Text>
        </View>
      </View>
      <Text style={styles.postInfo}>{post.text}</Text>
      <View style={styles.postActions}>
        <IconButton iconName={IconName.account} />
        <IconButton iconName={IconName.share} />
        <Button title='open' fontSize={16} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    marginVertical: 5,
    borderTopColor: '#484848',
    borderBottomColor: '#484848',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  postHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  headerText: {
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  name: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
  },
  time: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#484848'
  },
  postInfo: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'flex-start'
  },
  postActions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopColor: '#484848',
    borderTopWidth: 2
  }
})

export default PostCard
