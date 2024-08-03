import { Text, View, StyleSheet, FlatList } from "react-native";
import { useGoals, Goal } from "../context/GoalsContext";
import { GoalItem } from "./GoalItem";

export function GoalsList() {
  const { goals } = useGoals();

  function renderGoal({ item }: { item: Goal }) {
    return (
      <GoalItem
        id={item.id}
        task={item.task}
        description={item.description}
        done={item.done}
      />
    );
  }

  return (
    <View style={styles.container}>
      {goals.length !== 0 ? (
        <FlatList
          data={goals}
          renderItem={renderGoal}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noGoals}>No available goal...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    width: "100%",
  },
  noGoals: {
    color: "#4B00B2",
  },
});
