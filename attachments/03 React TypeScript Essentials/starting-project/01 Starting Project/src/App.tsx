import { useState } from 'react';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CouresGoalList from './components/CourseGoalList';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((preGoals) => {
      const newGoal: CourseGoal = {
        title: 'Learn React + TS',
        id: Math.random(),
        description: 'Learn it in depth',
      };
      return [...preGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((preGoals) => {
      return preGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CouresGoalList onDelete={handleDeleteGoal} goals={goals} />
    </main>
  );
}
