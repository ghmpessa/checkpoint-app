import React, { useContext, useRef, useEffect }  from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottom-tabs'
import AuthRoutes from './tab.routes'
import { makeGroup, makeLogin, makeSignUp } from '../factories/pages'
import { Group } from '../../presentation/pages'
import { ApiContext } from './../../presentation/contexts'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  const logged = useRef(false)
  const { getCurrentAccount } = useContext(ApiContext)

  useEffect(() => {
    getCurrentAccount()
      .then(account => {
        if (!!account.accessToken) {
          logged.current = true
        }
      })
  }, [])

  return (
    <Stack.Navigator
      initialRouteName={ logged ? 'Main' : 'Login'}
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
      <Stack.Screen
        name='Group'
        component={makeGroup}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
