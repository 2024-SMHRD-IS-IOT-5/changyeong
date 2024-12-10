import React, { useContext } from 'react'

import AddItem from './AddItem'
import ListItem from './ListItem'
import { TodoContext } from '../../context/Ex10TodoContext'

const List = () => {

  const {todos} = useContext(TodoContext)
  // console.log('todos', todos)

  const todoItem = todos.map(item => <ListItem key={item.num} item={item}/>)

  return (
    <div className='list-container'>
        <ul>
            {todoItem}
        </ul>
        <AddItem/>
    </div>
  )
}

export default List