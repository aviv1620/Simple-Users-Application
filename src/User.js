import { useState } from 'react'
import { UserOtherData } from './UserOtherData'

export const User = ({user,todos,database,viewer}) => {
  const [name, setName] = useState(user.name) 
  const [email, setEmail] = useState(user.email)
  const [moreData, setMoreData] = useState(false)

  const showMoreDataIfNeeded = () => {
    if(moreData)
      return <UserOtherData user={user}/>  
  }

  const showTasksStatus = () => {
    const uncompleted = todos.find(item => !item.completed)     
  
    if(uncompleted)
      return 'UNCOMPLETED 🟠'
    else
      return 'COMPLETED ✔'
  }  

  const updateUser = async () => {    
    const newUser = {...user,name,email}

    database.updateUser(newUser)        
  }

  const deleteUser = () => {    
    database.deleteUser(user.id)
  }

  const viewUser = () => {    
    viewer(user.id)    
  }

  const showMoreData = () => {    
    setMoreData(!moreData)
  }

  return (
    <div className='grid-item'>
        ID : {user.id}<br/>
        Name : <input type="text" value={name} onInput={e=>setName(e.target.value)}/><br/>
        Email: <input type="email" value={email} onInput={e=>setEmail(e.target.value)}/><br/>
        Tasks Status: {showTasksStatus()}<br/>
          <button onClick={showMoreData}>Other data 📄</button>
          <button onClick={updateUser}>Update 📝</button>
          <button onClick={deleteUser}>Delete 🗑</button>
          <button onClick={viewUser}>View 👁</button><br/>
        {showMoreDataIfNeeded()} <br/>    
    </div>
  )
}
