import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { IconName } from '../../components/icon'
import { Avatar, Icon, IconButton } from '../../components'

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.config}>
          <IconButton iconName={IconName.configs} color='transparent' iconColor='#ffffff' />
        </View>
        <Avatar color='#000000' label='V' size={120} badgeSize={30} badgeColor='#49ff00' />
        <Text style={styles.name}>O Verdadeiro</Text>
      </View>
    </View>
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})

export default Profile
