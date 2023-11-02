import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  selectedGoal: CGoal | null;
  onDeleteGoal: (goalId: string) => void;
  onUpdateGoal: (goal: CGoal) => void;
};

const CourseGoalList: React.FC<CourseGoalListProps> = ({
  goals,
  selectedGoal,
  onDeleteGoal,
  onUpdateGoal,
}) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li
          key={`${goal.title}-${goal.id}`}
          className={
            selectedGoal && selectedGoal.id === goal.id ? "selected" : ""
          }
        >
          <CourseGoal
            goal={goal}
            onDelete={onDeleteGoal}
            onUpdate={onUpdateGoal}
          />
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
