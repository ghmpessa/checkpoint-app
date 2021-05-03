
import 'react-native-gesture-handler'
import Routes from './src/main/routes'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Community, Login } from './src/presentation/pages'
import { theme } from './src/presentation/styles/theme'

const App: React.FC = () => {

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

export default App
