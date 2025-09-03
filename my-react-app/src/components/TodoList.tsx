import { useState } from 'react';
import type { Todo } from '../App';


interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={onDelete(todo.id)}></button>
        </li>
      ))}
    </ul>
  )
}