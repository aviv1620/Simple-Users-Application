import { useEffect, useMemo, useState } from 'react';
import { Content } from './Content';
import { UserAdder } from './UserAdder';
import { Users } from './Users';
import { Database } from './Utils';

function App() {  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [posts, setPosts] = useState([])

  const [database] = useState(new Database(setUsers,setTodos,setPosts))

  const [contentComponentKey, setContentComponentKey] = useState('not_selected')
  const [contentPanelUserID, setContentPanelUserID] = useState(-1) 

  const user = useMemo(
    () => findUserById(users,contentPanelUserID),
    [users,contentPanelUserID]
  )
  
  const userTodos = useMemo(
    () => filterItemsByUserId(todos,contentPanelUserID),
    [todos,contentPanelUserID]
  ) 

  const userPosts =  useMemo(
    () => filterItemsByUserId(posts,contentPanelUserID),
    [posts,contentPanelUserID]
  )

  const effectLoadDatabase = () => {
    database.initialize()
  }  

  const getContentComponent = () => {          
    switch (contentComponentKey) {                 
      case 'adder':
        return  <UserAdder database={database} closer={closer}/>
      case 'view': default:      
        return  <Content user={user} todos= {userTodos} posts= {userPosts} database={database}/>         
    }
  }

  const viewUser = (userId) => {
    setContentPanelUserID(userId)
    setContentComponentKey('view')
  }

  const viewAdder = () => {    
    setContentComponentKey('adder')
  }

  const closer = () => {    
    setContentComponentKey('not_selected')
  }

  useEffect(effectLoadDatabase, [database])

  return (
    <>
     <Users users={users} todos={todos} database={database} viewer={viewUser} adder={viewAdder} currentIdView={contentPanelUserID}/>
     {getContentComponent()}    
    </>   
  );
}

function findUserById(users,id){
  return users.find(item => item.id === id)
}

function filterItemsByUserId(item,id){
  return item.filter(item => item.userId === id)
}

export default App;
