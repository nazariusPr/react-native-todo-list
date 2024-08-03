import { useState } from "react";
import uuid from "react-native-uuid";
import { TextInput, Button, View, StyleSheet } from "react-native";
import { useGoals } from "../context/GoalsContext";

export function GoalInput() {
  const [goal, setGoal] = useState<string>("");
  const { addGoal } = useGoals();

  function Add() {
    if (goal.trim() === "") {
      return;
    }
    addGoal({
      id: uuid.v4().toString(),
      task: goal,
      description: "",
      done: false,
    });

    setGoal("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter new goal..."
        value={goal}
        onChangeText={(text) => setGoal(text)}
        placeholderTextColor="#ccc"
      />
      <Button title="Add" onPress={Add} color="#4B00B2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  input: {
    padding: 12,
    marginRight: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
