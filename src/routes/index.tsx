import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import { theme } from '@styles/theme';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = route.name === 'Home' ? 'home' : 'user';

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.button.active,
          tabBarInactiveTintColor: theme.colors.button.disabled,
          tabBarStyle: {
            backgroundColor: theme.colors.background
          },
          headerStyle: {
            backgroundColor: theme.colors.background
          },
          headerTintColor: theme.colors.text.primary
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
