import { useState, createContext, useContext } from "react";
import { ReactNode } from "react";

type GoalsProviderProps = {
  children: ReactNode;
};

export type Goal = {
  id: string;
  task: string;
  description: string;
  done: boolean;
};

type GoalsContextType = {
  addGoal: (goal: Goal) => Goal;
  getById: (id: string) => Goal | undefined;
  clear: () => void;
  deleteById: (id: string) => void;
  markGoal: (id: string, state: boolean) => void;
  goals: Goal[];
};

const GoalsContext = createContext({} as GoalsContextType);

export function useGoals() {
  return useContext(GoalsContext);
}

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<Goal[]>([]);

  function addGoal(goal: Goal) {
    setGoals((prev) => [...prev, goal]);
    return goal;
  }
  function getById(id: string) {
    return goals.find((goal) => goal.id === id);
  }

  function clear() {
    setGoals([]);
  }

  function deleteById(id: string) {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  }

  function markGoal(id: string, state: boolean) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, done: state } : goal
      )
    );
  }
  return (
    <GoalsContext.Provider
      value={{ addGoal, getById, clear, deleteById, markGoal, goals }}
    >
      {children}
    </GoalsContext.Provider>
  );
}
