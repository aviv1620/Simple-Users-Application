import { useEffect, useState } from 'react';
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

  const user = users.find(item => item.id === contentPanelUserID)
  const userTodos = todos.filter(item => item.userId === contentPanelUserID)
  const userPosts = posts.filter(item => item.userId === contentPanelUserID) 

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
     <Users users={users} todos={todos} database={database} viewer={viewUser} adder={viewAdder}/>
     {getContentComponent()}    
    </>   
  );
}

export default App;
