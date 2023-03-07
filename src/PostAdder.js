import { useState } from 'react'

export const PostAdder = ({closer,database,user}) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const newPost = () => {
    const newPost = {
      userId:user.id,
      title,
      body}

    database.createPost(newPost)

    closer()
  }

  return (
    <div>
        Title : <input type='text' value={title} onInput={e=>setTitle(e.target.value)}/><br/>
        body : <input type='text' value={body} onInput={e=>setBody(e.target.value)}/><br/>
          <button onClick={closer}>Cancel ❌</button>
          <button onClick={newPost}>Add ➕</button><br/>
    </div>
  )
}
