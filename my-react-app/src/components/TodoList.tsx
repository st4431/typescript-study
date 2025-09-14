import type { Todo } from '../App';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

export function TodoList({ todos, onDelete, onUpdate }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  )
}