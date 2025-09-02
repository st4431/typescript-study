// exportで他ファイルからこの変数を使えるようにできる
// typeはJavaのenumみたいなもの
export type TodoStatus = '未着手' | '着手中' | '完了';

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}