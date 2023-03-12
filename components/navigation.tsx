import * as React from 'react';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Index from '../src/index';
import Search from '../src/search';
import Detail from '../src/detail';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Index" component={Index} options={{
        tabBarLabel: 'Home',
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

function StackNavigation() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Navigation}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false,}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShadowVisible: false}} />
      </Stack.Navigator>
   
  );
}

export default StackNavigation;