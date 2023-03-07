import { useState } from 'react'
import { TodoAdder } from './TodoAdder'
import { Todos } from './Todos'

export const ContentTodos = ({database,user,todos}) => {

  const [componentKey, setComponentKey] = useState('view')

  const showButtonIfNeeded = () => {
    if(componentKey === 'view')
      return <button onClick={()=>setComponentKey('adder')}> Add ➕</button>  
  }

  const GetComponentByKey = () => {
    switch (componentKey) {
      case 'adder':
        return <TodoAdder closer={closeAdder} database={database} user={user}/>        
      case 'view':default:
        return <Todos todos={todos} database={database}/>      
    }
  }

  const closeAdder = () => {
    setComponentKey('view')
  }
  
  return (
    <>        
      <h2>Todos {showButtonIfNeeded()} </h2>               
        
      {GetComponentByKey()}       
    </>   
  )
}

