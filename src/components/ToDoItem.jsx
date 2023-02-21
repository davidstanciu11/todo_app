
function TodoItem({name, completed}) {  
    return <div>
        <h4>{name} - {completed.toString()}</h4>
        <button>Delete</button>
        <button>Complete</button>
    </div>
};

export default TodoItem;