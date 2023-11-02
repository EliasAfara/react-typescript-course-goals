import { useRef, type FormEvent, useEffect } from "react";
import { type CourseGoal } from "../App";

type NewGoalProp = {
  onAddNewGoal: (title: string, description: string) => void;
  onUpdateGoal: (title: string, description: string) => void;
  selectedGoal: CourseGoal | null;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewGoal = ({
  onAddNewGoal,
  onUpdateGoal,
  selectedGoal,
  isEditing,
  setIsEditing,
}: NewGoalProp) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoal = goal.current!.value;
    const newSummary = summary.current!.value;

    if (isEditing) {
      onUpdateGoal(newGoal, newSummary);
      setIsEditing(false);
    } else {
      onAddNewGoal(newGoal, newSummary);
    }

    goal.current!.value = "";
    summary.current!.value = "";
  };

  useEffect(() => {
    if (isEditing) {
      goal.current!.value = selectedGoal!.title;
      summary.current!.value = selectedGoal!.description;
    }
  }, [isEditing, selectedGoal]);

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>goal</label>
        <input
          id='goal'
          type='text'
          name='goal'
          ref={goal}
          placeholder='Your new goal'
        />
      </p>

      <p>
        <label htmlFor='summary'>summary</label>
        <input
          id='summary'
          type='text'
          name='summary'
          ref={summary}
          placeholder='Your new goal summary'
        />
      </p>

      <p>
        <button type='submit'>{isEditing ? "Update Goal" : "Add Goal"}</button>
      </p>
    </form>
  );
};

export default NewGoal;
