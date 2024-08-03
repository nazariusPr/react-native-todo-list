import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Goal, useGoals } from "../context/GoalsContext";
import { GoalDelete } from "./GoalDelete";

export function GoalItem({ id, task, description, done }: Goal) {
  const { deleteById } = useGoals();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <GoalDelete
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={() => deleteById(id)}
      />
      <View key={id} style={styles.goalContainer}>
        <Pressable
          onPress={() => setVisible(true)}
          android_ripple={{ color: "lightgray", borderless: false }}
          style={({ pressed }) => pressed && styles.onPress}
        >
          <Text style={styles.goalText}>{task}</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    marginVertical: 7,
    backgroundColor: "#4B00B2",
    borderRadius: 10,
    overflow: "hidden",
  },
  goalText: {
    padding: 10,
    color: "#fff",
  },
  onPress: {
    backgroundColor: "#2700B2",
    width: "100%",
  },
});

export default GoalItem;
