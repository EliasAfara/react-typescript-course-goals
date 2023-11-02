import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  id: string;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random().toString(),
        title,
        description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(goalId: string) {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals Image" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddNewGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
