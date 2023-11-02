import React from "react";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalProps = {
  goal: CGoal;
  onDelete: (goalId: string) => void;
  onUpdate: (goal: CGoal) => void;
};

const CourseGoal: React.FC<CourseGoalProps> = ({
  goal,
  onDelete,
  onUpdate,
}) => {
  return (
    <div>
      <h2>{goal.title}</h2>
      <p>{goal.description}</p>
      <div>
        <button onClick={() => onDelete(goal.id)}>Delete</button>
        <button onClick={() => onUpdate(goal)}>Edit</button>
      </div>
    </div>
  );
};

export default CourseGoal;
