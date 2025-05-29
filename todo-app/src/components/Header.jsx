export function Header({todos}) {

    const todosLength = todos.length


    return (
        <header>
            <h1 className = 'text-gradient'> You have {todosLength} {(todosLength != 1)? "tasks": "task"} </h1> 
            </header> 
    )
}