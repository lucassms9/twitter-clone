import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '@screens/Home'
import Profile from '@screens/Profile'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = route.name === 'Home' ? 'home' : 'user'

            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.3)',
          tabBarStyle: {
            backgroundColor: '#121212',
          },
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Settings' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
