import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Community } from '../../presentation/pages'
import { Icon } from '../../presentation/components'
import { IconName } from '../../presentation/components/icon'

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
        style: {
          height: 60,
          backgroundColor: '#323232'
        }
      }}
    >
      <AppTab.Screen
        name=' '
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Icon
              name={IconName.home}
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen
        name='Communities'
        component={Community}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Icon
              name={IconName.group}
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes
