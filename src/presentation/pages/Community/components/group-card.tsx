/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacityProps, Modal, TouchableOpacity } from 'react-native'

import csgoLogo from '../../../../../assets/cs.png'
import valorantLogo from '../../../../../assets/valorant.png'
import lolLogo from '../../../../../assets/apex.png'
import icon from '../../../../../assets/generic.png'
import { GroupModel } from '../../../../domain/models'

export enum GameLogos {
  cs = csgoLogo,
  valorant = valorantLogo,
  lol = lolLogo
}

type Props = {
  group: GroupModel
  game?: GameLogos
  handleClick?: () => void
}

const GroupCard: React.FC<Props> = ({ group, game, handleClick }: Props) => {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={handleClick}
    >
      <Image style={styles.image} source={icon} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.nick}>
          {group.name}
        </Text>
        <Text style={styles.rank}>
          {`Tag: #${group.tag}`}
        </Text>
        <Text style={styles.rank}>
          {`Created at: ${new Date(group.createdAt).toLocaleDateString()}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#161616',
    shadowColor: '#ffffff',
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#666666',
    paddingHorizontal: 10
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: 'center'
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
  },
  team: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'Montserrat-Regular'
  }
})

export default GroupCard
