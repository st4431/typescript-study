import { TodoManager } from "./todoManager.js";
const main = async () => {
    const todoManager = new TodoManager();
    console.log('--- タスクを3つ追加します ---');
    await todoManager.addTodo('TypeScriptの学習');
    await todoManager.addTodo('Reactの学習');
    await todoManager.addTodo('Spring Bootの学習');
    await todoManager.displayTodos();
    console.log('\n--- タスクの状態を更新し、1つ削除します ---');
    todoManager.updateTodoStatus(1, '完了');
    todoManager.deleteTodo(2);
    todoManager.displayTodos();
};
main();
//# sourceMappingURL=main.js.map