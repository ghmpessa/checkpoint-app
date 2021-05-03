import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottom-tabs'
import AuthRoutes from './tab.routes'
import { makeLogin } from '../factories/pages'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      headerMode='none'
    >
      <Stack.Screen
        name='Login'
        component={makeLogin}
      />
      <Stack.Screen
        name='Home'
        component={BottomTabs}
      />
      <Stack.Screen
        name='Community'
        component={BottomTabs}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
