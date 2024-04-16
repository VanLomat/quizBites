import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import DifficultyScreen from './screens/DifficultyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Diff" component={DifficultyScreen} />
          <Stack.Screen name="Game" component={GameScreen}/>
         </Stack.Navigator>

     
      </NavigationContainer>
  );
}

