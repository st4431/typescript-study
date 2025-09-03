// ReactからuseStateをインポート
import { useState } from 'react'
import './App.css'
import { Counter, type CounterActions } from './Counter'

function App() {
  // countというState（変数のようなもの）を作成し、初期値を0に設定
  // setCountはStateを更新するための関数
  // setCountという名前は自分で設定できる
  // 機能自体は標準搭載だが、名前は開発者が自由に設定していい
  // <>を使用することで、useStateで受け付ける引数の型を明示的にできる
  const [count, setCount] = useState<number>(0)

  const counterActions: CounterActions = {
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
    reset: () => setCount(0),
  };

  return (
    <>
      <h1>コンポーネントの練習</h1>

      <Counter
        label='多機能カウンター'
        count={count}
        actions={counterActions}
      />
    </>
  );
}

export default App
