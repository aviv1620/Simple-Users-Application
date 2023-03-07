import { Post } from './Post'

export const Posts = ({posts}) => {
  return (
    <div>
        {posts.map((item)=>{
          return (
            <Post key={item.id} post={item}/>
          )})}        
    </div>
  )
}
