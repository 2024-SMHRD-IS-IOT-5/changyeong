import React, { useEffect, useState } from 'react'

const Ex15 = () => {

    const pos = ['왼쪽', '정면', '오른쪽']

    // 1. pos라는 배열을 기반으로 hr 태그 밑에 버튼 3개를 만들어보자 (map)
    // 2. 그 버튼을 눌렀을 때 startGame 이라는 함수를 실행시키자 
    //   - startGame 이라는 함수는 직접 생성하기 
    // 3. startGame 이라는 함수에서 값을 세팅 
    //      - 나의 선택 : 사용자가 누른 '그' 버튼 
    //      - 상대의 선택 : 랜덤하게 왼쪽, 정면, 오른쪽이 나와야함
    //                      hint) 랜덤하게 숫자를 뽑아내서 인덱스로 활용 
    //      - 게임의 round를 하나씩 증가 
    // 4. 결과 판별 (useEffect)
    //      - round의 값이 바뀔 때 마다 승리, 패배 판별 
    //      - 나===상대 : 나의 승리 / 그렇지 않으면 나의 패배 
    //      - round가 1보다 작을 때, 결과창에 '게임 시작 전..' 이라고 띄우기 
    // 5. 다 된 사람들은 승리 만들어서 캡쳐해서 단톡방 업로드
    
    const [mchoi,setMchoi] = useState()
    const [cchoi,setCchoi] = useState()
    const [round,setRound] = useState(1)
    const [result,setResult] = useState('시작 전...')

    const startGame =(e)=>{
        //console.log('startGame', e.target.innerText)
        setMchoi(e.target.innerText)

        setCchoi(pos[parseInt(Math.random()*3)])
        setRound(round+1)
    }

    useEffect(()=>{
        if(round > 1){
            //라운드가 진행 됬을 때만! 결과 판별
            if(mchoi ===cchoi){
                setResult('승리')
            }else {
                setResult('패배')
            }
        }
    },[round])

  return (
    <div>
        <h1>참참참</h1>
        <p>나의 선택 :{mchoi}</p>
        <p>상대의 선택 :{cchoi}</p>
        <b>{result}</b>
        <hr/>
        {pos.map(item =>
            <button key={item} onClick={startGame}>{item}</button>
        )}
    </div>
  )
}

export default Ex15