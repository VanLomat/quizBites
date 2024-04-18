import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import QuizOthersScreen from './screens/QuizOthersScreen';
import DifficultyScreen from './screens/DifficultyScreen';
import RegisterScreen from './screens/RegisterScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Quiz Others!" component={QuizOthersScreen} />
              <Stack.Screen name="Difficulty" component={DifficultyScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
          
         </Stack.Navigator>

     
      </NavigationContainer>
  );
}

