import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GoalInput } from "./components/GoalInput";
import { GoalsList } from "./components/GoalsList";

export function AppContent() {
  return (
    <LinearGradient style={styles.container} colors={['#007BFF', '#0056d3']} >
      <GoalInput />
      <GoalsList />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 25,
  },
});
