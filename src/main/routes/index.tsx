import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account/current-account-adapter'


import StackRoutes from './stack.routes'
import { ApiContext } from '@/presentation/contexts'

const Routes: React.FC = () => (
  <NavigationContainer>
    <ApiContext.Provider value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
        }}>
      <StackRoutes />
    </ApiContext.Provider>
  </NavigationContainer>
)

export default Routes
