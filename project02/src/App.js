import "./App.css"
import MenuItem from "./components/MenuItem";
import MemberBox from "./components/MemberBox";

function App() {

  /** Component 컴포넌트
   * 리액트로 만들어진 앱을 다루는 최소 단위
   * 반복되는 코드를 하나로 묶어 컴포넌트화 시키는 것!
   * 내가 원하는 코드를 묶어 마치 하나의 태그처럼 사용한다.
   * ★★ 단, 반드시 대문자로 시작할 것 !!! ->
   * 기존의 HTML 태그와의 구분 필요
   */

  /** props 프롭스, 프로퍼티
   * 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할 때 사용
   */

  let iced = "아이스"
  let hot = "핫"
  let team = "팀명"
  

  return (
    <div>
      <MenuItem name="아메리카노" temp={iced} price="1,800"></MenuItem>
      <MenuItem name="바닐라라떼" temp={hot} price="2,300"></MenuItem>
      <MenuItem name="민트초코" temp={iced} price="3,600"></MenuItem>

      {/* 실습) 팀원들을 소개하는 컴포넌트를 생성해보자.
      1. components 폴더 안에 "MemberBox" 라는 컴포넌트를 만든다
      2. 그곳에 포함된 정보는 2개 (팀명, 멤버 이름)
        - 팀명은 변수로, 멤버이름은 텍스트로 정보를 전달한다.
      3. 다 된 사람들은 캡쳐해서 단톡방 업로드
      */}

        <div>
          <MemberBox team={team} name="신은지"></MemberBox>
          <MemberBox team={team} name="신은지"></MemberBox>
          <MemberBox team={team} name="신은지"></MemberBox>
          <MemberBox team={team} name="신은지"></MemberBox>
          <MemberBox team={team} name="신은지"></MemberBox>
        </div>


  </div>
  );
}

export default App;
