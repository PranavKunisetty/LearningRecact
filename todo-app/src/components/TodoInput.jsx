import {useState} from 'react' 
export function TodoInput({addTodo}) {

    const [input, setInput] = useState('');

    return (
        <div className = "input-container ">
            <input placeholder="Add new task" value={input} onChange= {(e) => {
                setInput(e.target.value);
            }}/>
            <button className="add-button" onClick={() => {
                if(input.trim() === '') {return} 
                addTodo(input);
                setInput(''); 
            }} >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}