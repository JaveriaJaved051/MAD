import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './StartScreen';
// import QuestionScreen from './QuestionScreen';
// import ResultScreen from './ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        {/* <Stack.Screen name="Questions" component={QuestionScreen} />
        <Stack.Screen name="Results" component={ResultScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
