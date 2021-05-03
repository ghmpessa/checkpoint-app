import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar as PaperAvatar, Badge } from 'react-native-paper'

type Props = {
  color?: string
  size: number
  label: string
  badgeSize?: number
  badgeColor?: string
}

const Avatar: React.FC<Props> = ({ color, size, label = 'NP', badgeSize, badgeColor = '#ff0000' }: Props) => {
  return (
    <View style={styles.container}>
      <PaperAvatar.Text
        labelStyle={{ fontFamily: 'Montserrat-Bold' }}
        style={{ backgroundColor: color }}
        size={size} label={label} />
      <Badge style={[styles.badge, { backgroundColor: badgeColor }]} size={badgeSize}>38</Badge>
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
  }
})

export default Avatar
