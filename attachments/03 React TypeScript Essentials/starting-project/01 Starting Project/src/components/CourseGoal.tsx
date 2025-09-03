import { type ReactNode } from 'react';

interface CourseGoalProps {
  title: string;
  description?: string;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  title,
  onDelete,
  id,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
