import type { TodoStatus } from './todo.js';
export declare class TodoManager {
    private todos;
    private nextId;
    /**
     * 新しいTodoタスクを追加します
     * @param タスクのタイトル
     */
    addTodo(title: string): Promise<void>;
    /**
   * 現在のすべてのTodoリストをコンソールに表示します
   */
    displayTodos(): Promise<void>;
    /**
     * 指定されたIDのタスクの状態を更新します
     * @param id 状態を更新したいタスクのID
     * @param status 新しい状態
     */
    updateTodoStatus(id: number, status: TodoStatus): void;
    /**
     * 指定されたIDのタスクを削除します
     * @param id 削除したいタスクのID
     */
    deleteTodo(id: number): void;
}
//# sourceMappingURL=todoManager.d.ts.map