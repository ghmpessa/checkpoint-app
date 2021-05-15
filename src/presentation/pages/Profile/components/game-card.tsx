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

export enum GameLogos {
  cs = csgoLogo,
  valorant = valorantLogo,
  lol = lolLogo
}

type Props = {
  info: {
    nick: string
    rank: string
    team: string
    game: GameLogos
  }
}

const GameCard: React.FC<Props> = ({ info }: Props) => {

  return (
    <>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <IconButton style={{ marginHorizontal: 20 }} iconName={IconName.edit} iconColor='#40A900'/>
            </View>
          </Animated.View>
        )}
      >
        <View
          style={styles.container}
        >
          <Image style={styles.image} source={info.game} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.nick}>
              {`nickname: ${info.nick}`}
            </Text>
            <Text style={styles.rank}>{`rank: ${info.rank}`}</Text>
            <Text style={styles.team}>{`team: ${info.team}`}</Text>
          </View>
        </View>
      </Swipeable>
    </>
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

export default GameCard
