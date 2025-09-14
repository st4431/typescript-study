import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  taskStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
}

function App() {
  // useStateはセッターのようなものである上に、画面の再描画を命令する
  // またジェネリクスによって、todosにはTodo型の配列を指定
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const fetchTasks = async () => {
      try {
        // axiosというAPI通信のライブラリを使用してバックエンドからデータを取得し、responseに格納する
        const response = await axios.get<Todo[]>('http://localhost:8080/api/tasks');
        // response.data でsetStateする
        setTodos(response.data);
        console.log("デバッグ用：タスクの取得に成功しました！");
      } catch (error) {
        console.log("タスクの取得に失敗しました:", error);
      }
  };

  // よくわからんけどuseEffectがなければ以下の処理が無限ループされる
  // これを防ぐためにuseEffectを使用する
  // useEffectは、「画面が描画されるタイミング」で使用する
  // よってポストなどは必要ない
  useEffect(() => {
    // 上で定義した関数をここで実行している
    fetchTasks();
  }, []);

  const addTask = async (title: string) => {
    try {
      const newTodo = {
        title: title,
        taskStatus: 'NOT_STARTED'
      };
      await axios.post('http://localhost:8080/api/tasks', newTodo);
      fetchTasks();
    } catch (error) {
      console.error("タスクの登録に失敗しました：", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`) ;
      fetchTasks();
    } catch (error) {
      console.error("タスクの削除に失敗しました：", error);
    }
  }

  const updateTaskStatus = async (updatedTodo: Todo) => {
    try {
      await axios.put('http://localhost:8080/api/tasks', updatedTodo);
      fetchTasks();
    } catch (error) {
      console.error("タスクの更新に失敗しました：", error);
    }
    // mapは戻り値を必須とする
    // mapは条件式をそのまま記述して良い（必ずしもif文を使わなくてもいい）
    // todo.isDone = !todo.isDone ではプロパティが変わっただけでアドレスは変わっていない（ミューテーション）
    // Reactは「メモリ上のアドレスが変化したか否か」でStateの変化を判断するため、アドレスごと変えないといけない
    // よって、新しいオブジェクトを作り直すことで、プロパティもアドレスも変更する必要がある
    // 以下では元のtodoをコピーし、新しくオブジェクトを作り直している（イミュータブルな更新）

    // setTodos(todos.map(todo => 
    //   todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    // ));
  }

  return (
    <>
      <h1>TODOリスト</h1>
      {/* TodoFormというコンポーネント（メソッド）を呼び出し、
      onAddというProps（引数、左辺）としてaddTodo関数（引数、右辺）を渡します */}
      <TodoForm onAdd={addTask} />

      {/* TodoListというコンポーネント（メソッド）を呼び出し、
      todosというProps（引数、左辺）としてtodos（引数、右辺）を渡します */}
      <TodoList todos={todos} onDelete={deleteTask} onUpdate={updateTaskStatus}/>
    </>
  );
}

export default App;