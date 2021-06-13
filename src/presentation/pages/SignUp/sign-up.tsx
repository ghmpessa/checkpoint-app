import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, Alert, SafeAreaView } from 'react-native'

import { Button, Input, IconButton } from '../../components'
import { IconName } from '../../components/icon'
import { useState } from 'react'
import { AddAccount, AddAccountParams } from '../../../domain/usecases'
import { Validation } from '@/presentation/protocols/validation'
import { useEffect } from 'react'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<Props> = ({validation, addAccount}: Props) => {
  const navigation = useNavigation()
  const [user, setUser] = useState<AddAccountParams>({
    username: '',
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    usernameError: '',
    nameError: '',
    emailError: '',
    passwordError: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const usernameError = validation.validate('username', user)
    const nameError = validation.validate('name', user)
    const emailError = validation.validate('email', user)
    const passwordError = validation.validate('password', user)

    setError({
      usernameError,
      nameError,
      emailError,
      passwordError
      })
  }, [user])

  const formInvalid = !!error.usernameError || !!error.nameError || !!error.emailError || !!error.passwordError

  const handleRegister = (): void => {
    try {
      if (loading) {
        return
      }

      setLoading(true)

      addAccount.add(user)

      setLoading(false)
      Alert.alert('Done!', 'Your account have been created!', [{
        text: 'login', onPress: () => navigation.navigate('Login') 
      }])

    } catch (error) {
      Alert.alert('Error!', error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <IconButton onPress={() => navigation.goBack()} style={styles.iconButton} iconName={IconName.back} iconColor='#ffffff' />
        <Text style={styles.title}>checkpoint</Text>
        <Text style={styles.subtitle}>Sign Up</Text>
          <Input
            error={!!error.usernameError}
            message={error.usernameError || undefined}
            style={{backgroundColor: '#202020', marginVertical: 20}}
            label='username'
            underlineColor='#40A900'
            onChangeText={username => setUser({...user, username })}
          />
          <Input
            error={!!error.nameError}
            message={error.nameError || undefined}
            label='name'
            style={{backgroundColor: '#202020', marginVertical: 20}}
            underlineColor='#40A900'
            onChangeText={name => setUser({...user, name })}
            />
          <Input
            error={!!error.emailError}
            message={error.emailError || undefined}
            style={{backgroundColor: '#202020', marginVertical: 20}}
            autoCapitalize='none'
            label='e-mail'
            underlineColor='#40A900'
            onChangeText={email => setUser({...user, email })}
            />
          <Input
            secureTextEntry
            error={!!error.passwordError}
            message={error.passwordError || undefined}
            label='password'
            style={{backgroundColor: '#202020', marginVertical: 20}}
            underlineColor='#40A900'
            onChangeText={password => setUser({...user, password })}
            />
          <Button
            disabled={formInvalid}
            onPress={handleRegister}
            title='sign up'
            style={[styles.button, formInvalid && { backgroundColor: '#c2c2c2' }]}
          />
      </ScrollView>
      <View style={styles.member}>
        <Text style={styles.text}>Already a member?</Text>
        <Button
          text
          title='Sign in here'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  iconButton: {
    position: 'absolute',
    top: 30,
    left: 30
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    color: '#f1f1f1',
    paddingVertical: 15,
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: '#666666',
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center'
  },
  content: {
    flexGrow: 1,
    padding: 20
  },
  button: {
    padding: 20,
    backgroundColor: '#40A900',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  member: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Montserrat-Bold'
  }
})

export default SignUp
