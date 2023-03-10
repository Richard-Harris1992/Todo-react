import { getTodos } from "../services/todos-api"
import{useState, useEffect} from 'react'
import Create from "./CreateTodo"

export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodos() // calling the function to get the data
        .then(res => setTodos(res.data)) // setting state with returned data
    }, [])
    todos.forEach(i => console.log(i));
    return(
        <div>
            <ul>
            {todos.map((todo) =>{
                if(!todo.complete) {
                    return (
                            <li><a href={`/${todo._id}`}>{todo.description}</a></li>
                    );
                }
            })}
          </ul>
          <Create />  
        </div>
    )
}