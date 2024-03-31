import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (task.trim() === '') return; // Prevent adding empty tasks
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const editTask = () => {
    if (task.trim() === '') return; // Prevent editing to empty tasks
    const updatedTasks = [...tasks];
    updatedTasks[editIndex].text = task;
    setTasks(updatedTasks);
    setTask('');
    setEditIndex(-1);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.taskItem}>
      {editIndex === index ? (
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder="Edit task"
        />
      ) : (
        <Text style={styles.taskText}>{item.text}</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196F3' }]}
          onPress={() => {
            if (editIndex === index) {
              editTask();
            } else {
              setTask(item.text);
              setEditIndex(index);
            }
          }}>
          <Text style={styles.buttonText}>{editIndex === index ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F44336' }]}
          onPress={() => deleteTask(index)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder="Enter task"
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center vertically
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center', // Center horizontally
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingLeft: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
