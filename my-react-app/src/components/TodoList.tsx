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
          {/* checkedはboolean */}
          <input 
            type="checkbox" 
            checked={todo.isDone}
            onChange={() => onUpdate(todo.id)} 
          />
          {/* isDoneの状態によってクラス名を変更し、CSSの有無を調整している */}
          <span className={todo.isDone ? 'done' : ''}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  )
}