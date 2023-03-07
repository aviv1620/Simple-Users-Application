

export const Todo = ({database,todo}) => {

  const markCompleted = () => {
    const newTodo = {...todo,completed:true}

    database.updateTask(newTodo)
  }

  return (
    <div>
        Title : {todo.title}<br/>
        Completes : {todo.completed?'✔':'🟠'} {!todo.completed? 
          <button onClick={markCompleted}>Mark Completed </button>:''}<br/>
        <br/>
    </div>
  )
}
