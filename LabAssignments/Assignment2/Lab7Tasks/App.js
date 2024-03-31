// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DiscountCalculator from './DiscountCalculator';
import GPACalculatorScreen from './GPACalculatorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DiscountCalculator /> */}
     <GPACalculatorScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
