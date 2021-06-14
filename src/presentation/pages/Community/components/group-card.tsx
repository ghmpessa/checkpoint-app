/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacityProps, Modal, TouchableOpacity } from 'react-native'

import { IconButton } from '../../../components'
import { IconName } from '../../../components/icon'
import { Swipeable } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

import csgoLogo from '../../../../../assets/cs.png'
import valorantLogo from '../../../../../assets/valorant.png'
import lolLogo from '../../../../../assets/apex.png'
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
      <Image style={styles.image} source={game} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.nick}>
          {group.name}
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
    borderColor: '#666666'
  },
  image: {
    height: 110,
    width: 110,
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
