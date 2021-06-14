import { IconName } from '../../../components/icon'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Button, Avatar } from '../../../components'
import IconButton from './icon-button'

const PostCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Avatar label='V' size={45} badgeSize={20} badgeColor='#000000' />
        <View style={styles.headerText}>
          <Text style={styles.name}>O Verdadeiro</Text>
          <Text style={styles.time}>7h - was playing CS:GO</Text>
        </View>
      </View>
      <Text style={styles.postInfo}>Eu honestamente gostaria de saber o que acontece na cabeça desse pessoal</Text>
      <View style={styles.postActions}>
        <IconButton iconName={IconName.account} />
        <IconButton iconName={IconName.share} />
        <Button title='open' />
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
