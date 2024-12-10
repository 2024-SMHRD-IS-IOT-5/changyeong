// 컴포넌트가 포함해야할 구성 : 함수, 수출, return문
const MemberBox = ({name, team})=>{


    return(
        <div>
            <strong>{team}</strong>
            <span>{name}</span>
      </div>
    )
}

export default MemberBox
