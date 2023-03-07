
import { ContentPosts } from './ContentPosts'
import { ContentTodos } from './ContentTodos'

export const Content = ({database,user,todos,posts}) => {

  if(!user)
    return(
      <div className='split right' >
          <h1>User not selected</h1>
          <h2>Press view 👁 button to see user content</h2>
      </div>)
  
  return (
    <div className='split right'>
      <h1>{user.name} - {user.id}</h1>
                 
      <ContentTodos user={user} todos={todos} database={database}/>
              
      <ContentPosts user={user} posts={posts} database={database}/>
    </div>
         
                           
    
  )
}