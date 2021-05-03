import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { TextInput, HelperText } from 'react-native-paper'
import { theme } from '../styles/theme'

type InputProps = {
  error?: boolean
  message?: string
}

type Props = React.ComponentProps<typeof TextInput> & InputProps

const Input: React.FC<Props> = ({ error = false, message, ...props }: Props) => {
  const [blur, setBlur] = useState(false)

  return (
    <>
      <TextInput
        onBlur={() => setBlur(true)}
        style={styles.input}
        {...props}
      >
      </TextInput>
      {blur && message &&
        <HelperText
          type='error'
          visible={error}
          style={styles.error}
        >
          {message}
        </HelperText>}
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingHorizontal: 25,
    marginVertical: 10,
    backgroundColor: '#323232',
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold'
  },
  error: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  }
})

export default Input
