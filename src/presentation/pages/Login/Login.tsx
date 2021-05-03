import { Validation } from '../../protocols/validation'
import React, { useState, useEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, Keyboard } from 'react-native'

import { Button, Input } from '../../components'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    const emailError = validation.validate('email', userInput)
    const passwordError = validation.validate('password', userInput)

    setError({
      ...error,
      emailError,
      passwordError
    })
  }, [userInput])

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
              error={!!error.emailError}
              message={error.emailError || undefined}
              value={userInput.email}
              mode='outlined'
              label='e-mail'
              onChangeText={email => setUserInput({ ...userInput, email })}
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
              <Button title='login' />
            </View>
            <View style={styles.signUpWrap}>
              <Text style={styles.text}>New here?</Text>
              <Button
                text
                title='Sign up'
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
