// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// export default function App() {
//  const [getCount, setCount] = useState(0);
//  return (
//  <View style={styles.container}>
//  <Text style={{fontSize:18, fontWeight:'bold'}}>Counter Application</Text>
//  <View style={styles.just} flexDirection='row'>
//  <Button title='Decrease' color='red' 
// onPress={()=>{setCount(getCount-1)}} disabled={getCount==0}></Button>
//  <Text> {getCount} </Text>
//  <Button title='Increase' color='green' 
// onPress={()=>{setCount(getCount+1)}}></Button>
//  </View>
//  <StatusBar style="auto" />
//  </View>
//  );
// }
// const styles = StyleSheet.create({
//  container: {
//  flex: 1,
//  backgroundColor: '#fff',
//  alignItems: 'center',
//  justifyContent: 'center',
//  },
//  just: {
//  padding:10,
//  justifyContent:'space-evenly' },
// });



import React from 'react';
import {View,Text,Button, StyleSheet } from 'react-native';
import GameLayout from './GameLayout'; // Assuming GameLayout.js is in the same directory
import LoginScreen from './LoginScreen'; // Assuming LoginScreen.js is in the same directory
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Button color={Red} onPress={()=>{console.log("Button Pressed")}}>I am red Buttom</Button>
      <Text style={styles.container}>Again Wecome Javeria This is for you to learn</Text>
     <Button color={red}>"Stop makig more Butttons"</Button>
      <GameLayout/>
       <LoginScreen />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;





