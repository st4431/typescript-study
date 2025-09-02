export class TodoManager {
    todos = [];
    nextId = 1;
    /**
     * 新しいTodoタスクを追加します
     * @param タスクのタイトル
     */
    async addTodo(title) {
        console.log('サーバーにTodoの追加をリクエストします...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newTodo = {
            id: this.nextId++,
            title: title,
            status: '未着手',
        };
        // タスク追加
        this.todos.push(newTodo);
        console.log(`Todoを追加しました: ${title}`);
    }
    /**
   * 現在のすべてのTodoリストをコンソールに表示します
   */
    async displayTodos() {
        console.log('サーバーにTodoの取得をリクエストします...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Todoを取得が完了しました。');
        console.log('--- TODOリスト ---');
        this.todos.forEach(todo => {
            console.log(`[ID: ${todo.id}] ${todo.title} (${todo.status})`);
        });
    }
    /**
     * 指定されたIDのタスクの状態を更新します
     * @param id 状態を更新したいタスクのID
     * @param status 新しい状態
     */
    updateTodoStatus(id, status) {
        // findメソッドで見つかったか見つかってないか
        // 見つかっていない場合、undefinedが入る
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.status = status;
        }
    }
    /**
     * 指定されたIDのタスクを削除します
     * @param id 削除したいタスクのID
     */
    deleteTodo(id) {
        // filterメソッドで、指定されたID以外のタスクで新しい配列を作り出す
        // 結果的に削除される
        this.todos = this.todos.filter(t => t.id !== id);
    }
}
//# sourceMappingURL=todoManager.js.map