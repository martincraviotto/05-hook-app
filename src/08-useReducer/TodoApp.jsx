import { TodoAdd, TodoList } from "./index";
import { useTodos } from "../hooks";

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
        <h1>TodoApp: {todosCount},   <small>pendientes: {pendingTodosCount} </small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                < TodoList 
                    todos={todos}  
                    onDeleteTodo = {handleDeleteTodo} 
                    onToggleTodo = {handleToggleTodo}/>
            </div>
            <div className="col-5">


                <h4>Agregar ToDo</h4>
                <hr />

                <TodoAdd onNewTodo={ (todo) => handleNewTodo (todo)}/>
                
            </div>
        </div>

    </>
  )
}
