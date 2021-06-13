import { Validation } from '../../protocols/validation'
import React, { useState, useEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, Keyboard, Alert } from 'react-native'

import { Button, Input } from '../../components'
import { useNavigation } from '@react-navigation/core'
import { Authentication, AuthenticationParams } from '@/domain/usecases'

type Props = {
  authentication: Authentication
  validation: Validation
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const navigation = useNavigation()

  const [userInput, setUserInput] = useState<AuthenticationParams>({
    username: '',
    password: ''
  })
  const [error, setError] = useState({
    username: '',
    passwordError: '',
    mainError: ''
  })
  const [loading, setLoading] = useState(false)

  const formInvalid = !!error.username || !!error.passwordError

  useEffect(() => {
    const username = validation.validate('username', userInput)
    const passwordError = validation.validate('password', userInput)

    setError({
      ...error,
      username,
      passwordError
    })
  }, [userInput])

  const handleLogin = (): void => {
    try {

      if (loading) {
        return
      }
      setLoading(true)

      authentication.auth(userInput)
      setLoading(false)

      navigation.navigate('Main')

    } catch (error) {
      Alert.alert('Login error!', error.message)
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>
            <Text style={styles.title}>checkpoint</Text>
            <Input
              error={!!error.username}
              message={error.username || undefined}
              value={userInput.username}
              autoCapitalize='none'
              mode='outlined'
              label='username'
              onChangeText={username => setUserInput({ ...userInput, username })}
            />
            <Input
              error={!!error.passwordError}
              message={error.passwordError || undefined}
              secureTextEntry
              mode='outlined'
              label='password'
              onChangeText={password => setUserInput({ ...userInput, password })}
            />
            <View style={styles.button}>
              <Button
                disabled={formInvalid}
                loading={loading}
                onPress={handleLogin}
                buttonHeight={48}
                title='login' />
            </View>
            <View style={styles.signUpWrap}>
              <Text style={styles.text}>New here?</Text>
              <Button
                text
                title='Sign up'
                handleClick={() => navigation.navigate('SignUp')}
              />
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  title: {
    color: '#f1f1f1',
    fontSize: 48,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    marginBottom: 60
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold'
  },
  signUpWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    width: '50%',
    paddingHorizontal: 25,
    marginVertical: 15
  }
})

export default Login
