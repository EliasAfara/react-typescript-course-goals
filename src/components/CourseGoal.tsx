import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: string;
  title: string;
  onDelete: (goalId: string) => void;
}>;

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
