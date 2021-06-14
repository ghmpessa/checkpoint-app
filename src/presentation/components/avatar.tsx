import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar as PaperAvatar, Badge } from 'react-native-paper'

type Props = {
  color?: string
  size: number
  label: string
  badgeSize?: number
  badgeColor?: string
  shadow?: boolean
  level?: number
}

const Avatar: React.FC<Props> = ({ shadow = false, color, size, label = 'NP', badgeSize, badgeColor = '#ff0000', level }: Props) => {
  return (
    <View style={styles.container}>
      <PaperAvatar.Text
        labelStyle={{ fontFamily: 'Montserrat-Bold' }}
        style={[{ backgroundColor: color }, shadow && styles.avatar]}
        size={size} label={label} />
      <Badge style={[styles.badge, { backgroundColor: badgeColor }]} size={badgeSize}>{level}</Badge>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'center',
    top: -10,
    fontFamily: 'Montserrat-Bold'
  },
  avatar: {
    shadowColor: '#61ff00',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  }
})

export default Avatar
