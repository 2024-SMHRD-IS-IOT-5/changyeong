import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex10TodoContext'

const ListItem = ({item}) => {

  const { deleteTodo, toggleTodo } = useContext(TodoContext)


  return (
    <div className='list-item'>
        <li>
            <input type="checkbox"
            checked={item.completed}
            onChange={()=>{toggleTodo(item.num)}}
            ></input>
            <label
                style={{ textDecoration : item.completed ? 'line-through' : 'none' }}
            >
                <span className='todo-text'>{item.text}</span>
            </label>
            <button onClick={()=>{deleteTodo(item.num)}}>DELETE</button>
        </li>
    </div>
  )
}

export default ListItem