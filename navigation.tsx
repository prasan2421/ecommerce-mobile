import * as React from 'react';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Index from './src/index';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Index} options={{
         headerShown: false,
        unmountOnBlur: true,
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
            name="home"
            color={color}
            size={26}
          />
            // <Icon name="rocket" size={30} color="#900" />
        ),
      }}
      />
      <Tab.Screen name="Sell" component={SettingsScreen} options={{

// tabBarLabel: 'Home',

unmountOnBlur: true,
tabBarIcon: ({ color }) => (
  <MaterialCommunityIcons
    name="file"
    color={color}
    size={26}
  />
), }}
 />
 <Tab.Screen name="Chat" component={SettingsScreen} options={{

// tabBarLabel: 'Home',

unmountOnBlur: true,
tabBarIcon: ({ color }) => (
  <MaterialCommunityIcons
    name="file"
    color={color}
    size={26}
  />
), }}
 />
 <Tab.Screen name="Me" component={SettingsScreen} options={{

// tabBarLabel: 'Home',

unmountOnBlur: true,
tabBarIcon: ({ color }) => (
  <MaterialCommunityIcons
    name="file"
    color={color}
    size={26}
  />
), }}
 />
    </Tab.Navigator>
  );
}

export default  Navigation;