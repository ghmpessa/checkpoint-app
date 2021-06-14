/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { Avatar } from '../../../components'
import { ProfileShortModel } from '../../../../domain/models'

type Props = {
  member: ProfileShortModel
  handleClick?: () => void
}

const MemberCard: React.FC<Props> = ({ member, handleClick }: Props) => {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={handleClick}
    >
      <Avatar label={member.name.slice(0, 1)} size={45} badgeSize={20} badgeColor='#000000' />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.nick}>
          {member.username}
        </Text>
        <Text style={styles.rank}>
          {member.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#242424',
    shadowColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#666666'
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around'
  },
  nick: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#fdfbfb'
  },
  rank: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#666666'
  }
})

export default MemberCard
