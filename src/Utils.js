/* Because I don't work in a real database,
* The data save in client-side, and reset every time the user refresh the page.
* 
* React holds one object from class Database in the Top Level Component, and
* Component, and passes to children with Props.
*/
import axios from 'axios';

const usersURL = 'https://jsonplaceholder.typicode.com/users'
const postsURL = 'https://jsonplaceholder.typicode.com/posts'
const todosURL = 'https://jsonplaceholder.typicode.com/todos'
  
function findLestId(lst){
  return lst.reduce((accumulator, item) => Math.max(accumulator, item.id), -Infinity);
}

class Database {
    constructor(setUsers,setTodos,setPosts){
        this.setUsers = setUsers;
        this.setTodos = setTodos;
        this.setPosts = setPosts;
    }

    async initialize(){        
        const {data:users} = await axios.get(usersURL)
        const {data:posts} = await axios.get(postsURL)
        const {data:todos} = await axios.get(todosURL)

        this.users = users
        this.posts = posts
        this.todos = todos

        this.setUsers(this.users)
        this.setTodos(this.todos)
        this.setPosts(this.posts)
        
        this.usersIdCounter = findLestId(this.users) + 1
        this.todosIdCounter = findLestId(this.todos) + 1
        this.postsIdCounter = findLestId(this.posts) + 1
    }

    async createUser(user){
        const newUser = {...user,id:this.usersIdCounter}

        this.usersIdCounter++

        this.users = [...this.users,newUser]

        this.setUsers(this.users)
    }

    async updateUser(newUser){     
        this.users = this.users.map(((item)=>item.id === newUser.id? newUser : item))

        this.setUsers(this.users)
        
    }

    async deleteUser(id){       
        this.users = this.users.filter((item)=>item.id !== id)   

        this.setUsers(this.users)
    }

    async createTask(task){        
        const newTask =  {...task,id:this.todosIdCounter}       

        this.todosIdCounter++

        this.todos = [...this.todos,newTask]
       
        this.setTodos(this.todos)
    }

    async updateTask(newTask){
        this.todos = this.todos.map(((item)=>item.id === newTask.id? newTask : item))

        this.setTodos(this.todos)
    }

    async deleteTask(id){
        this.todos = this.todos.filter((item)=>item.id !== id)   

        this.setTodos(this.todos)
    }

    async createPost(post){
        const newPost = {...post,id:this.postsIdCounter}

        this.postsIdCounter++

        this.posts = [...this.posts,newPost]
       
        this.setPosts(this.posts)
    }

    async updatePost(newPost){
        this.posts = this.posts.map(((item)=>item.id === newPost.id? newPost : item))

        this.setPosts(this.posts)
    }

    async deletePost(id){
        this.posts = this.posts.filter((item)=>item.id !== id)   

        this.setPosts(this.posts)
    }
}

export {Database}
