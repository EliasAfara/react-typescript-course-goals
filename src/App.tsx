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
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoalId] = useState<CourseGoal | null>(null);

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

  function handleUpdateGoal(title: string, description: string) {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.map((goal) => {
        if (goal.id === selectedGoal!.id) {
          return { ...goal, title, description };
        }
        return goal;
      });
      return updatedGoals;
    });
    setSelectedGoalId(null);
  }

  const handleEdit = (goal: CourseGoal) => {
    setIsEditing(true);
    setSelectedGoalId(goal);
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals Image" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal
        onAddNewGoal={handleAddGoal}
        onUpdateGoal={handleUpdateGoal}
        selectedGoal={selectedGoal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <CourseGoalList
        goals={goals}
        selectedGoal={selectedGoal}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleEdit}
      />
    </main>
  );
}

export default App;
