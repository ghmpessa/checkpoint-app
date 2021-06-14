import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, FlatList } from 'react-native'

import { Button } from '../../components'

import valorant from '../../../../assets/valorant.png'
import PostCard from '../Home/components/post-card'

const Group: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={valorant} />
        <Text style={styles.title}>Jogadores ruins de Valorant</Text>
        <Button 
          title='join group'
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item }) => (
            <PostCard />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: '#f1f1f1',
    textAlign: 'center'
  },
  image: {
    height: 110,
    width: 110,
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
  }
})

export default Group
