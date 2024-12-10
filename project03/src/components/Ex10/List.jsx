import React, { useContext } from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'
import { TodoContext } from '../../context/Ex10TodoContext'


const List = () => {

  const {todos} = useContext(TodoContext)

  const todosItem = todos.map(item => <ListItem key={item.num} item={item} /> )
  return (
    <div className='list-container'>
      <ul>
          {todosItem}
      </ul>
      <AddItem/>
    </div>

  )
}

export default List
