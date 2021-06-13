import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottom-tabs'
import AuthRoutes from './tab.routes'
import { makeLogin, makeSignUp } from '../factories/pages'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      headerMode='none'
    >
      <Stack.Screen
        name='Login'
        component={makeLogin}
      />
      <Stack.Screen
        name='Main'
        component={BottomTabs}
      />
      <Stack.Screen
        name='SignUp'
        component={makeSignUp}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
