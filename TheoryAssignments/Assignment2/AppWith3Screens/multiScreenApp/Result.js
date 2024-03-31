import React from 'react';
import { View, Text, Button } from 'react-native';

const ResultScreen = ({ route }) => {
  const { score } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your Score: {score} / {questions.length}</Text>
      <Button title="Retake Quiz" onPress={() => navigation.navigate('Start')} />
    </View>
  );
};

export default ResultScreen;
