import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex10TodoContext'

const AddItem = () => {

   const { newTodo, setNewTodo, addNewTodo } = useContext(TodoContext)



  return (
    <div>
      <input type="text"
              onChange={(e)=>{setNewTodo(e.target.value)}}
              value={newTodo}
              autoFocus
      ></input>
      <button onClick={addNewTodo}>ADD</button>
    </div>
  )
}

export default AddItem