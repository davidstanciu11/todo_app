import { useState } from "react";
function AddTodo({onAddToDo}) {
    const [todoText, setTodoText] = useState("");
    return (
        <>
        <h3>Add new todo:</h3>
        <input type="text" value={todoText} onChange={
            (e) => {setTodoText(e.target.value)}
        } />
        <button onClick={() => {
            onAddToDo(todoText)
        }}>Add</button>
        </>
    )
}

export default AddTodo;