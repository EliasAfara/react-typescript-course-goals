import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

export type CourseGoal = {
  id: string;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random().toString(),
        title: "Finish the Course",
        description: "Learn all about the course main topics.",
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

      <button onClick={handleAddGoal}>Add Goal</button>

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
