
export const TodoItem = (  {todo, onDeleteTodo, onToggleTodo}  ) => {
  return (
        <li  className="list-group-item d-flex justify-content-between">
            <span 
              className="align-self-center"
              onClick={ ()=> onToggleTodo(todo.id)}
            > 
                { todo.description } 
            </span>
            <button 
              className="btn btn-danger"
              onClick={()=> onDeleteTodo(todo.id)}> 
              borrar
            </button>
        </li>   
  )
}
