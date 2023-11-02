import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  isEditing: boolean;
  onDeleteGoal: (goalId: string) => void;
  onUpdateGoal: (goal: CGoal) => void;
};

const CourseGoalList = ({
  goals,
  onDeleteGoal,
  onUpdateGoal,
}: CourseGoalListProps) => {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={`${goal.title}-${goal.id}`}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
              onUpdate={onUpdateGoal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
