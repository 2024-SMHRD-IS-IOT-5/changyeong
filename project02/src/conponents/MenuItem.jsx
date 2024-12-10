// 컴포넌트가 포함해야할 구성 : 함수, 수출
const MenuItem =({name,temp,price})=>{
    /* 책치비구조화 할당 (구조분해할당)
    - 배열이나 객체 속성을 해체하여 개별변수로 값을 담을 수있는 표현식

    [Case1]
    let props ={ name : '민트초코', temp : '아이스'}
    console.log(props.name) 

    [Case2]
    let {name,temp} ={ name : '민트초코', temp : '아이스'}
    console.log(name) 

    */

    //console.log('현재 props의 상태',props)

    return(
        <div>
            <strong>{temp} {name}</strong>
            {" "}
            <span>{price}원</span>
        </div>
    )
}

export default MenuItem;