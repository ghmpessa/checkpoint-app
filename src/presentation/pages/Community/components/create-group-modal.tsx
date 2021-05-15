import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Modal, ScrollView, TouchableOpacity, Alert } from 'react-native'

import { Button as PaperButton } from 'react-native-paper'

import { Input, Icon, IconButton } from '../../../components'
import { IconName } from '../../../components/icon'

type Props = {
  visible: boolean
}

const CreateGroupModal: React.FC<Props> = ({visible = false}: Props) => {
  const [group, setGroup] = useState({
    name: '',
    description: '',
    game: ''
  })
  const [gamesVisible, setGamesVisible] = useState(false)

  const games = ['F1', 'Counter-Strike: Global Offensive', 'League of Legends', 'Valorant', 'GTA V', 'Fifa21', 'Free Fire', 'Rainbow6 Siege', 'Fall Guys', 'World of Warcraft', 'The Elder Scrolls Online', 'Apex Legends', 'COD: Warzone']

  const handleSelect = (game: string): void => {
    setGroup({ ...group, game })
    setGamesVisible(!gamesVisible)
  }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          !visible
        }}
      >
        <View style={[styles.modalView]}>
          <IconButton style={styles.close} iconName={IconName.arrowDown} iconColor='#ffffff' />
          <Text style={styles.title}>create your group</Text>
          <ScrollView contentContainerStyle={styles.modalScroll} showsVerticalScrollIndicator={false}>
            <Input
              style={styles.input}
              label='group name'
              underlineColor='#40A900'
            />
            <Input
              style={styles.input}
              label='description'
              multiline
              numberOfLines={4}
              underlineColor='#40A900'
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setGamesVisible(!gamesVisible)}
              style={styles.select}
            >
              <Text style={styles.selectText}>{group.game === '' ? 'select game' : group.game}</Text>
              <Icon name={IconName.arrowDown} size={20} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={gamesVisible}
                onRequestClose={() => {
                  setGamesVisible(!gamesVisible)
                }}
              >
                <View style={styles.selectStateContainer}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                >
                  {
                    games.map(game => (
                      <TouchableOpacity onPress={() => handleSelect(game)} activeOpacity={0.5} style={styles.stateButton} key={game}>
                        <Text style={styles.stateText}>
                          {game}
                        </Text>
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
                </View>
              </Modal>
            </TouchableOpacity>
            <Input
              style={styles.input}
              label='Complemento'
              underlineColor='#40A900'
            />
          </ScrollView>
            <PaperButton
              style={styles.modalButtonWrap}
              uppercase={false}
              mode='text'
            >
              <Text style={styles.headerText}>create group</Text>
          </PaperButton>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
    color: '#f1f1f1',
    marginBottom: 10
  },
  close: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    borderRadius: 50
  },
  modalView: {
    flex: 1,
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#121212',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#ffffff',
    paddingTop: 10
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#333333'
  },
  modalScroll: {
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  modalButtonWrap: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#40A900',
    borderTopWidth: 10
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff'
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#333333'
  },
  select: {
    borderWidth: 1,
    borderColor: '#c2c2c2',
    color: '#333333',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  selectText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: '#ffffff'
  },
  selectStateContainer: {
    flex: 1,
    width: 200,
    backgroundColor: '#242424',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 5,
    marginVertical: 40
  },
  stateButton: {
    flex: 1,
    padding: 15
  },
  stateText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#ffffff'
  },
  input: {
    backgroundColor: '#151515',
    marginVertical: 10
  }
})

export default CreateGroupModal
