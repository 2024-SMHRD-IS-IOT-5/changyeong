import React, { Component } from 'react'

export default class Ex13 extends Component {

  /* Class Component
    - 함수형 프로그래밍이 유행하게 되면서 React의 
    Class Component 사용률은 현저히 줄어들게 되었다
    - 그러나, LifeCycle이라는 중요한 기능을 사용해야하기 
    때문에 이를 useEffect라는 리액트 훅으로 대체하게 된다.     
    */

  /* LifeCycle 
    - 리액트는 컴포넌트 기반의 View 중심 라이브러리 
    - 각각의 컴포넌트에는 제각각 수명주기 (LifeCycle) 이라는게 존재
    - 컴포넌트가 생겨나고, 변화하고, 없어지는 일련의 프로세스를
        프로그래머가 통제하는 것이 LifeCycle의 핵심 

    1. constructor (클래스 생성자)
    - 리액트에서 컴포넌트를 만들 때 처음으로 실행됩니다. 
    - 초기 state, 변수, 함수 등이 이곳에서 선언된다. 

    2. render (작업한 결과물을 return 해주는 렌더)
    - ★필수 메소드★
    - render 메소드가 실행되면서 우리가 작성한 JSX 가 HTML 로 변환되어
     우리 눈에 보여지게 됨 
    - 이곳에 setState같이 무언가를 변화시키는 메소드를 작성하면
        무한루프가 일어날 가능성 O 

    3. componentDidMount (Mounting 직후)
    - render 메소드안에 모든 부분이 브라우저에 나타난 이후에 실행됨 
    - API Call, 무거운 데이터, 타이머 ... 
    - 사용자들은 조금이라도 화면이 먼저 뜨면, 그 화면이 완전하지 않더라도
    속도가 빠르다고 느낌, 그렇기 때문에 일부 화면을 띄운 후 데이터, API 를
    가져오는 것 
    - setState를 사용하기에도 안정적인 공간 


    4. componentDidUpdate (갱신이 일어난 직후)
     - state나 props의 값이 갱신 됐을 때 
     - ref의 변화는 포함되지 않는다. 
    */

    componentDidMount(){
        console.log('3. componentDidMount ')
    }

    componentDidUpdate(){
        console.log('update 되었습니다.')
    }

    constructor(props){
        super(props)
        console.log('1. constructor')

        this.state = {
            num : 0
        }

        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(){
        console.log('handleIncrement')
        this.setState({
            num : this.state.num += 1
        })
    }

  render() {
    console.log('2. rander')
    return (
      <div>
        <h1>Counter {this.state.num}</h1>
        <button onClick={this.handleIncrement}>+1</button>
        </div>
    )
  }
}
