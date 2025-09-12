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
  // またジェネリクスによって、todosにはTodo型の配列を指定
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      isDone: false,
    };
    // 「既存のtodosの配列に加えて、newTodoを末尾に追加した新たな配列を作るよ」という意味
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id: number) => {
    // mapは戻り値を必須とする
    // mapは条件式をそのまま記述して良い（必ずしもif文を使わなくてもいい）
    // todo.isDone = !todo.isDone ではプロパティが変わっただけでアドレスは変わっていない（ミューテーション）
    // Reactは「メモリ上のアドレスが変化したか否か」でStateの変化を判断するため、アドレスごと変えないといけない
    // よって、新しいオブジェクトを作り直すことで、プロパティもアドレスも変更する必要がある
    // 以下では元のtodoをコピーし、新しくオブジェクトを作り直している（イミュータブルな更新）
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    ));
  }

  return (
    <>
      <h1>TODOリスト</h1>
      {/* TodoFormというコンポーネント（メソッド）を呼び出し、
      onAddというProps（引数、左辺）としてaddTodo関数（引数、右辺）を渡します */}
      <TodoForm onAdd={addTodo} />

      {/* TodoListというコンポーネント（メソッド）を呼び出し、
      todosというProps（引数、左辺）としてtodos（引数、右辺）を渡します */}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
}

export default App;