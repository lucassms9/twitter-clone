import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home';
import Profile from '@screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Settings' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
