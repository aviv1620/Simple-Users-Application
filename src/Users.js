import { useState } from 'react'
import { User } from './User'

export const Users = ({users,todos,database,viewer,adder}) => {  
  
  const [searchBox, setSearchBox] = useState('')

  const mapUsers = (item) => {
    const todosFiltered = todos.filter(task => task.userId === item.id)

    return <User key={item.id} user={item} todos={todosFiltered} database={database} viewer={viewer}/>
  }

  const filterUsers = (item) => {
    return item.name.toUpperCase().includes(searchBox.toUpperCase())       
  }

  return (
    <div className='split left'>

      Search: <input type='text' value={searchBox} onInput={e=>setSearchBox(e.target.value)}></input>
        <button onClick={adder}>Add ➕</button> <br/><br/>
                           
      {users.filter(filterUsers).map(mapUsers)}        
                             
    </div>
  )
}
 