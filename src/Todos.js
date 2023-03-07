
import { Todo } from './Todo'

export const Todos = ({database,todos}) => { 
  return (
    <>
        {todos.map((item)=>{
          return (
            <Todo key={item.id} todo={item} database={database}/>
          )})}              
    </>
  )
}
