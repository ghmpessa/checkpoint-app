import { Button, Input } from '../../components'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native'
import { TextInput } from 'react-native-paper'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Home: React.FC = () => {

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Input
          mode='outlined'
          style={styles.search}
          value=''
          placeholder='find groups...'
          right={
            <TextInput.Icon
              name='magnify'
              color='#ffffff'
              size={25}
            />
          }
        />

        <View style={styles.buttonWrap}>
          <Button
            buttonHeight={48}
            title='create group'
          />
        </View>

        {/* <View>
        <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => (
          <Text />
          )}
          />
        </View> */}
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  search: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    margin: 20,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold'
  },
  buttonWrap: {
    paddingHorizontal: 50
  }
})

export default Home
