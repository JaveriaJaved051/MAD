// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

// const GameLayout = () => {
//   const [userInput, setUserInput] = useState(''); // State to store user input

//   const handleNumberPress = (number) => {
//     setUserInput(userInput + number); // Update user input on button press
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Number Guessing Game</Text>
//       <View style={styles.inputArea}>
//         <TextInput
//           value={userInput} // Display current input
//           editable={false} // Prevent direct editing in input field
//           style={styles.userInputText}
//         />
//         <FlatList
//           data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
//           renderItem={({ item }) => (
//             <Button
//               title={item.toString()} // Convert digit to string for button display
//               onPress={() => handleNumberPress(item)} // Call handleNumberPress with the number
//               style={styles.numberButton}
//             />
//           )}
//           keyExtractor={(item) => item.toString()} // Unique key for each button
//           numColumns={3} // Arrange buttons in a 3-column grid
//         />
//       </View>
//       {/* Add logic for game functionality (e.g., checking user guess, displaying results) */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputArea: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   userInputText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   numberButton: {
//     margin: 5,
//   },
// });

// export default GameLayout;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const NumberGuessingGame = () => {
  const [userInput, setUserInput] = useState('');

  const handleNumberPress = (number) => {
    setUserInput(userInput + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guehssing Game</Text>
      <View style={styles.inputArea}>
        <TextInput
          value={userInput}
          editable={false}
          style={styles.userInputText}
        />
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => (
            <Button
              title={item.toString()}
              onPress={() => handleNumberPress(item)}
              style={styles.numberButton}
            />
          )}
          keyExtractor={(item) => item.toString()}
          numColumns={3}
        />
      </View>
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
  marginBottom: 10, // Adjusted margin bottom
  marginTop: 20, // Added margin top
  color: 'blue', // Title color
},
  inputArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userInputText: {
    fontSize: 18,
    marginBottom: 10,
  },
  numberButton: {
    margin: 5,
  },
});


export default NumberGuessingGame;
