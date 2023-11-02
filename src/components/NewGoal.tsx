import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddNewGoal: (title: string, description: string) => void;
};

const NewGoal = ({ onAddNewGoal }: NewGoalProp) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoal = goal.current!.value;
    const newSummary = summary.current!.value;
    onAddNewGoal(newGoal, newSummary);
  };

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
        <button type='submit'>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
