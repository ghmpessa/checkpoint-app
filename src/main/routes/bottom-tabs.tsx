import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Community, Home } from '../../presentation/pages'
import { IconName } from '../../presentation/components/icon'
import { makeProfile } from '../factories/pages'

const BottomTabs: React.FC = () => {

  const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
      labeled={false}
      activeColor='#40A900'
      inactiveColor='#484848'
      barStyle={{
        backgroundColor: '#161616',
        borderTopWidth: 1,
        borderTopColor: '#323232'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: IconName.home,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: IconName.group,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={makeProfile}
        options={{
          tabBarIcon: IconName.account,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
