import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/screen/Homescreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
            initialRouteName="Homescreen"
            screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homescreen" component={Homescreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}