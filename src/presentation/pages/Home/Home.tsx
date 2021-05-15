import React, { useState } from 'react'
import { FlatList, StyleSheet, TextInput, View, Text, ScrollView } from 'react-native'
import PostCard from './components/post-card'
import { Input } from '../../components'

const Home: React.FC = () => {
  const [search, setSearch] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          secureTextEntry={search.length <= 0 && searchFocus ? true : false}
          style={styles.input}
          onFocus={() => setSearchFocus(true)}
          placeholder="what's going on?"
          multiline
          underlineColor='transparent'
        />
      </View>

      <View style={styles.posts}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <PostCard />
          )}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616'
  },
  header: {
    width: '100%',
    height: '15%',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: '#303030',
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderBottomWidth: 1,
    borderEndColor: '#484848',
    borderStartColor: '#484848',
    borderBottomColor: '#484848',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    marginBottom: 5
  },
  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    justifyContent: 'center',
    paddingTop: 10
  },
  expandHeader: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '30%',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: '#303030',
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderBottomWidth: 1,
    borderEndColor: '#484848',
    borderStartColor: '#484848',
    borderBottomColor: '#484848',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    marginBottom: 5
  },
  posts: {
    flex: 1
  }
})

export default Home
