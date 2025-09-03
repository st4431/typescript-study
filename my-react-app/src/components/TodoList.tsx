import { useState } from 'react';
import type { Todo } from '../App';


interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export function TodoList({ todos }: TodoListProps) {
  const [deletedId, setDeletedId] = useState<number>();
  const handleDelete = () => {
    on
  }
  

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={setDeletedId(todo.id)}></button>
        </li>
      ))}
    </ul>
  )
}