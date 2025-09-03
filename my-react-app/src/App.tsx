import { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {
  // useStateはセッターのようなものである上に、画面の再描画を命令する
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      isDone: false,
    };
    // 「既存のtodosの配列に加えて、newTodoを末尾に追加した新たな配列を作るよ」という意味
    // todos,push(newTodo)ではダメな理由は画面の再描画がされないから
    // 配列ごと新しくしないとReactは再描画をしない
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>TODOリスト</h1>
      {/* TodoFormというコンポーネント（メソッド）を呼び出し、onAddというProps（引数、左辺）としてaddTodo（引数、右辺）を渡します */}
      {/* 渡すaddTodoはApp.tsxで初期化したもの */}
      <TodoForm onAdd={addTodo} />

      {/* TodoListというコンポーネント（メソッド）を呼び出し、todosというProps（引数、左辺）としてtodos（引数、右辺）を渡します */}
      {/* 渡すtodosはApp.tsxで初期化したもの */}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
}

export default App;