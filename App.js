import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function App() {
  const [enterTaskText, setTaskText] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  function getMyTasks(enteredText) {
    setTaskText(enteredText);
  }

  function addMyTask() {
    setListOfTasks([...listOfTasks, enterTaskText]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <Text style={styles.appTitle}>My Todo App</Text>
      <TextInput
        style={styles.taskTextInput}
        placeholder='Write my chore...'
        placeholderTextColor='#E2E8C0'
        onChangeText={getMyTasks}></TextInput>
      <View style={styles.taskButton}>
        <Button title='Add task' color='#846C5B' onPress={addMyTask}></Button>
      </View>
      <View>
        <View>
          {listOfTasks.map((task) => (
            <Text style={styles.taskText}>{task}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#443742",
  },
  appTitle: {
    fontWeight: "bold",
    color: "#E2E8C0",
    fontSize: 30,
  },
  taskTextInput: {
    color: "#E2E8C0",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  taskButton: {
    paddingHorizontal: 140,
  },
  taskText: {
    color: "#E2E8C0",
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8C0",
  },
});
