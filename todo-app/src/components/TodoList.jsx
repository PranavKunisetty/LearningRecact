import { TodoCard } from "./TodoCard";

export function TodoList({todos, selectedTab, deleteTodo, completeTodo}) {
    


    const filteredTodos = selectedTab === 'All' ? todos : 
        selectedTab === 'Completed' ? 
            todos.filter(todo => todo.completed) : 
            todos.filter(todo => !todo.completed)
    return (
        <>
            {
                filteredTodos.map((todo,todoIndex) => {

                    const originalIndex = todos.findIndex(t => t === todo);

                    return (
                        <TodoCard 
                            todoIndex = {originalIndex}
                            key = {todoIndex} 
                            todo={todo} 
                            deleteTodo = {deleteTodo}
                            completeTodo = {completeTodo}
                        />
                    )
                })
            }

        </>
    )
}