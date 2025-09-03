import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from '../App';

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CouresGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal onDelete={onDelete} id={goal.id} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
