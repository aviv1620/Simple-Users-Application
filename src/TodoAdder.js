import { useState } from 'react'

export const TodoAdder = ({database,closer,user}) => {

  const [title, setTitle] = useState("")

  const addTask = () => {
    const newTask = {
      userId:user.id,
      completed:false,
      title}

    database.createTask(newTask)

    closer()
  }

  return (
    <div>
        Title : <input type='text' value={title} onInput={e=>setTitle(e.target.value)}/><br/>
          <button onClick={closer}>Cancel ❌</button>
          <button onClick={addTask}>Add ➕</button><br/>
    </div>
  )
}
