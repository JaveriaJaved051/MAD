// import React, { useState} from 'react';
// import { View ,Text,StyleSheet, TextInput, Button, Pressable, FlatList} from "react-native";

// const GPACalculatorScreen = () => {
//   const [name, setName] = useState('');
//   const [gpa, setGPA] = useState('');
//   const [addition, saveAddition] = useState([]);
//   const [showSavedData, setShowSavedData] = useState(false);
//   const [searchQuery, setSearchQuery] = useState(''); // Define the search query state variable

//   const handleViewPress = () => {
//     setShowSavedData(true);
//   };

//   const handleAddButton = () => {
//     const newData = { name, gpa };
//     saveAddition([...addition, newData]);
//     setName('');
//     setGPA('');
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text>Name: {item.name}</Text>
//       <Text>GPA: {item.gpa}</Text>
//     </View>
//   );

//   // Filter saved data based on search query
//   const filteredData = addition.filter((item) => {
//     return (
//       item.name.includes(searchQuery) || // Filter based on name
//       item.gpa.toString().includes(searchQuery) // Filter based on GPA
//     );
//   });
//    const clearStudents = () => {
//     setStudents([]);
//   };

//   const handleSearchButton = () => {
//     // Perform search based on search query
//     // No need to store anything in state as filteredData will automatically update
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput
//         style={styles.TextInput}
//         placeholder="Enter name"
//         value={name}
//         onChangeText={setName}
//       />

//       <Text style={styles.label}>GPA:</Text>
//       <TextInput
//         style={styles.TextInput}
//         placeholder="Enter GPA"
//         value={gpa}
//         keyboardType='numeric'
//         onChangeText={setGPA}
//       />

//       <View style={styles.rowContainer}>
//         <Button title='Add' onPress={handleAddButton} />
//         <Button title='Search' onPress={handleSearchButton} />
//         <Button title='View History' onPress={handleViewPress} />
//       </View>
//       <FlatList
//         data={students}
//         renderItem={({ item }) => (
//           <Text>
//             {item.name} - {item.gpa}
//           </Text>
//         )}
//         keyExtractor={item => item.name}
//       />
//       <Button title="Clear All" onPress={clearStudents} />
//       {/* {showSavedData && (
//         <FlatList
//           data={addition}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )} */}
//          </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     marginTop: 60,
//     marginRight: 'auto',
//     marginLeft: 20,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     marginTop: 40,
//     justifyContent: 'space-between'
//   },
//   TextInput: {
//     backgroundColor: 'white',
//     color: 'black',
//     alignSelf: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     padding: 10,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });

// export default GPACalculatorScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const GPACalculatorScreen = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [students, setStudents] = useState([]);
  const [showSavedData, setShowSavedData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddButton = () => {
    // Basic input validation (can be extended for more robust checks)
    if (!name || !gpa) {
      alert('Please enter both name and GPA.');
      return;
    }

    const newStudent = { name, gpa: parseFloat(gpa) }; // Ensure GPA is a number
    setStudents([...students, newStudent]);
    setName('');
    setGPA('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Name: {item.name}</Text>
      <Text>GPA: {item.gpa}</Text>
    </View>
  );

  const filteredData = students.filter((item) => {
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQueryLower) ||
      item.gpa.toString().includes(searchQueryLower)
    );
  });

  const handleSearchButton = () => {
    setShowSavedData(true); // Show filtered results when searching
  };

  const clearStudents = () => {
    setStudents([]);
    setShowSavedData(false); // Hide results after clearing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>GPA:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter GPA (e.g., 3.8)"
        value={gpa}
        keyboardType="numeric"
        onChangeText={setGPA}
      />

      <View style={styles.rowContainer}>
        <Button title="Add" onPress={handleAddButton} />
        <Button title="Search" onPress={handleSearchButton} />
        <Button title="View History" onPress={() => setShowSavedData(true)} />
      </View>

      {showSavedData ? (
        <FlatList
          data={searchQuery ? filteredData : students} // Display filtered or full list
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      ) : null}

      <Button title="Clear All" onPress={clearStudents} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 60,
    marginRight: 'auto',
    marginLeft: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  TextInput: {
    backgroundColor: 'white',
    color: 'black',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default GPACalculatorScreen;
