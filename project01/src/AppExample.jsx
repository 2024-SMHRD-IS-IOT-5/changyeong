
function AppExample() {

    let today = new Date()
    console.log('today', today)
    console.log('현재 날짜', today.toLocaleDateString())
    console.log('월', today.getMonth()+1)

    let month = today.getMonth()+1
    console.log(parseInt(month/3))

    let season = ""
    if(parseInt(month/3)===1) {
        season ="봄"
    }else if(parseInt(month/3)===2) {
        season ="여름"
    }else if(parseInt(month/3)===3) {
        season ="가을"
    }else {
        season ="겨울"
    }

    let name = prompt("이름을 입력하세요")


    /* 예제
    STEP 1) 현재 날짜를 가져온다
     -> 현재 날짜(new Date()), 현재 몇월인지 (getMonth())

    STEP 2) 사용자에게 이름을 입력받아준다. 

    STEP 3) 현재의 월에 따라 계절을 다르게 세팅 
        - 3~5 : 봄
        - 6~8 : 여름 
        - 9~11 : 가을 
        - 12,1,2: 겨울 

    RESULT) 
    2024.11.14. (h1태그)
    (hr태그)
    000님 지금은 가을입니다. 좋은 하루 보내세요! (h4태그)
    */
    return(
        <>
            <h1>{today.toLocaleDateString()}</h1>
            <hr/>
            <h4> {name}님, 지금은 {season}입니다. 좋은하루 보내세요!</h4>
        </>
    )
}

export default AppExample;
// // 2
// let month = {}

// //3
// let mon_i = today.getMonth()+1
// if(mon_i <= 2 ){
//     month = "겨울"
// } else if(mon_i <= 5){
//     month = "봄"
// }else if (mon_i <=8){
//     month = "여름"
// } else if (mon_i <= 11){
//     month = "가을"
// } else if (mon_i === 12){
//     month = "겨울"
// }

// //4
// let name = prompt("이름을 입력하세요", "장혜원")
// return (
    
//     <>
        
//         <h1> {today.toLocaleDateString()} </h1>
//         <hr></hr>
//         <h4> {name}님, 지금은 {month}입니다. 좋은하루 보내세요!!</h4>
//     </>
// );
// }

// export default AppExample; // 밖에서 사용할 수있도록 항상 수출가능
