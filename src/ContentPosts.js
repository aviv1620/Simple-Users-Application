import { useState } from 'react'
import { PostAdder } from './PostAdder'
import { Posts } from './Posts'

export const ContentPosts = ({database,user,posts}) => {

  const [componentKey, setComponentKey] = useState('view')

  const showButtonIfNeeded = () => {
    if(componentKey === 'view')
      return <button onClick={()=>setComponentKey('adder')}> Add ➕</button>  
  }

  const GetComponentByKey = () => {
    switch (componentKey) {      
      case 'adder':
        return <PostAdder closer={closeAdder} database={database} user={user}/>
      case 'view':default:
        return <Posts posts={posts}/>             
    }
  }

  const closeAdder = () => {
    setComponentKey('view')
  }  

  return (
    <>       
      <h2>Posts {showButtonIfNeeded()} </h2>               
                 
      {GetComponentByKey()}           
    </>
  )
}
