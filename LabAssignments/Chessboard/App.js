import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Function to render a single square on the chessboard
  const renderSquare = (row, col) => {
    const isEvenRow = row % 2 === 0;
    const isEvenCol = col % 2 === 0;
    const backgroundColor = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)
      ? '#FFFFFF'
      : '#000000';

    return (
      <View key={`${row}-${col}`} style={[styles.square, { backgroundColor }]}>
        {/* You can render any content you want within the square */}
      </View>
    );
  };

  // Function to render a single row of squares
  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      squares.push(renderSquare(row, col));
    }
    return (
      <View key={row} style={styles.row}>
        {squares}
      </View>
    );
  };

  // Rendering the chessboard
  const rows = [];
  for (let row = 0; row < 8; row++) {
    rows.push(renderRow(row));
  }

  return (
    <View style={styles.container}>
      {rows}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40, // Adjust size of the square as per your requirement
    height: 40, // Adjust size of the square as per your requirement
  },
});

