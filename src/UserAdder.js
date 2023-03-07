import { useState } from 'react'

export const UserAdder = ({database,closer}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const addUser = () => {
    const newUser = {name,email}

    database.createUser(newUser)

    closer()
  }

  return (  
    <div className='split right'>
        <h1>Add New User</h1>
        Name : <input type='text' value={name} onInput={e=>setName(e.target.value)}/><br/>
        Email : <input type='email' value={email} onInput={e=>setEmail(e.target.value)}/><br/>
          <button onClick={closer}>Cancel ❌</button>
          <button onClick={addUser}>Add ➕</button><br/>
    </div>
  )
}
