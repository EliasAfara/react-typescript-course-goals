import { type CourseGoal } from "../App";

type CourseGoalProps = CourseGoal & {
  onDelete: (goalId: string) => void;
  onUpdate: (goal: CourseGoal) => void;
};

const CourseGoal = ({
  id,
  title,
  description,
  onDelete,
  onUpdate,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onUpdate({ id, title, description })}>
        Update
      </button>
    </article>
  );
};

export default CourseGoal;
