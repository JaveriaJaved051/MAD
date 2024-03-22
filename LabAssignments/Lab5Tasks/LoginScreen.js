import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter username and password.');
      return; // Prevent further processing if empty fields
    }

    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login successful!');
    } else {
      Alert.alert('Error', 'Incorrect username or password.');
    }
  };

  const isButtonEnabled = username.trim() !== '' && password.trim() !== ''; // Check for trimmed values

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputFields}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Hide password characters
          style={styles.textInput}
        />
      </View>
      <Button title="Submit" onPress={handleLogin} disabled={!isButtonEnabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputFields: {
    marginBottom: 20,
  }})

  export default LoginScreen;
