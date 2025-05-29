export function TodoCard({todo, todoIndex, deleteTodo, completeTodo}) {
    return (
        <div className = "card todo-item">
            <p> {todo.input} </p>
            <div className = "todo-buttons"> 
                <button disabled={todo.completed} onClick = {() => completeTodo(todoIndex)}> 
                    <h6>Done</h6>
                </button>
                <button onClick = {() => deleteTodo(todoIndex)} > 
                    <h6>Delete</h6>
                </button>
            </div>
        </div> 
    )
}