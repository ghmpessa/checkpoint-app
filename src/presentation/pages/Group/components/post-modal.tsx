import React, { useContext } from 'react'
import { StyleSheet, View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native'

import { GroupContext } from '../../../contexts'

import { Input, IconButton, Button } from '../../../components'
import { IconName } from '../../../components/icon'



type Props = {
  handlePost?: () => void
}

const PostModal: React.FC<Props> = ({ handlePost }: Props) => {

  const { visible, setVisible, text, setText, loading } = useContext(GroupContext)

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible)
        }}
      >
        <View style={styles.modalWrap}>
          <View style={ styles.modalView}>
            <IconButton style={styles.close} iconName={IconName.arrowDown} onPress={() => setVisible(!visible)} />
            <Text style={styles.modalText}>what's going on?</Text>
              <Input
                mode='outlined'
                multiline
                numberOfLines={10}
                style={styles.input}
                onChangeText={text => setText(text)}
              />
              <Button loading={loading.post} disabled={!text.length} title='post' onPress={handlePost} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
    marginBottom: 10,
    color: '#333333'
  },
  close: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    borderRadius: 50
  },
  modalView: {
    backgroundColor: '#242424',
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#ffffff',
    padding: 10
  },
  modalText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: '#f1f1f1',
    marginHorizontal: 10
  },
  modalButtonWrap: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#3f9f98',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff'
  },
  input: {
    backgroundColor: '#323232',
    margin: 10
  }
})

export default PostModal
