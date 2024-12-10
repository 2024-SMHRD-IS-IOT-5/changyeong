import React, { useState } from 'react'
import List from '../components/Ex10/List'
import '../style/ex10.css'
import { TodoContext } from '../context/Ex10TodoContext'

const Ex10 = () => {

  // 할일들의 목록을 배열로 관리
  const [todos, setTodos] = useState([
    { text: '첫 할일', num: 1, completed: false },
    { text: '두번째 할일', num: 2, completed: false }
  ])


  /** 새로운 할일 텍스트를 담아줄 state */
  const [newTodo, setNewTodo] = useState()

  /** todos 배열에 새로운 할일 obj를 추가해주는 함수 */
  const addNewTodo = () => {
    console.log('addNewTodo Func', newTodo)
    // 스프레드 문법(...)
    // 기존 배열이 있다면 배열을 유지시키고 그 뒤로 내용을 추가한다.
    // [...기존배열, 추가할 내용]
    setTodos([...todos,
    {
      text: newTodo,
      completed: false,
      num: todos.length > 0 ? todos[todos.length - 1].num + 1 : 1
    }
    ])

    setNewTodo("")
  }

  /** 사용자가 선택한 특정 데이터를 배열안에서 삭제하는 함수 */
  // 1. ListItem에 DELETE 버튼을 눌렀을 때, deleteTodo 함수를 실행시킨다.
  //      (context, 익명함수, 매개변수에 내가 누른 그 할일의 고유num을 보낸다.)
  // 2. Ex10.jsx deleteTodo 함수로 와서 매개변수 안에 숫자를 console창에 확인해본다.
  // 3. filter 함수를 사용해서 배열 내의 아이템에 고유 숫자가, 내가 받아온 숫자가
  //       아닌것들로만 배열을 재구성 => 새로운 배열의 이름 filteredTodo
  // 4. todos에 새로운 filteredTodo를 새로 세팅

  const deleteTodo = (num) => {
    console.log('deleteTodo', num)
    const filteredTodo = todos.filter(item => item.num != num)
    setTodos(filteredTodo)
  }


    /** 사용자가 선택한 todo 데이터를 완료했을 때, 체크&밑줄 */
    // 1. ListItem에서 input 체크를 눌렀을 때, toggleTodo 함수를 실행시킨다.
    //    (내가 누른 할일의 고유 num 보내준다.)
    // 2. Ex10.jsx로 와서 매개변수 안에 숫자 확인
    // 3. find 함수를 사용해서 배열 내에 내가 가져온 숫자와 동일한 todo를 찾는다.
    // 4. 찾은 그 todo의 complete를 반대로 
    // 5. 바뀐 todo를 다시 재 세팅

    const toggleTodo = (num) => {
        console.log ('toggleTodo', todos.find(item => item.num == num))
        const targetTodo = (todos.find(item => item.num == num))
        if(targetTodo){
          targetTodo.completed = !targetTodo.completed
          setTodos([...todos]) // 현상황을 화면에 반영
          // 변수로 코드를 작성하면 화면에 바로 세팅되지 않는다. -> setState 필요
        }
    }




  return (
    <TodoContext.Provider value={{ todos, setTodos, newTodo, setNewTodo, addNewTodo, deleteTodo, toggleTodo}}>
      <div className='todo-container'>
        <h1>Todo List</h1>
        <List />
      </div>
    </TodoContext.Provider>
  )
}

export default Ex10