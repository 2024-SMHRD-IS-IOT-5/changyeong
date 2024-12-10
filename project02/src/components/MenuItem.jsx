// 컴포넌트가 포함해야할 구성 : 함수, 수출, return문
const MenuItem = ({name, temp, price})=>{
    /* 객체 비구조화 할당 (구조분해할당)
    - 배열이나 객체의 속성을 해체하여 개별변수로 값을 담을 수 있는 표현식

    [Case 1]
    let props = { name : '민트초코', temp : '아이스'}
    console.log(props.name)

    [Case 2] 구조분해이용
    let {name, temp} = {name : '민트초코', temp : '아이스'}
    console.log(name)

    귀찮으니까 이렇게 써주기



     */

    // console.log('현재 props의 상태', props)

    return(
        <div>
            <strong>{temp} {name}</strong>
            {" "}
            <span>{price}원</span>
      </div>
    )
}

export default MenuItem