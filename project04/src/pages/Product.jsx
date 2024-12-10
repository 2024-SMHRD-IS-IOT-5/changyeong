import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {


    /** useParams
     * - url의 파라미터 정보를 가져올수 있다
     * - 물품의 고유한 ID 값을 가져오는데 적합하다.
     * - 단, 한가지 정보만 사용이 가능하기 때문에 가장 고유한 값을 사용하는것이 졸다
     * 
     * [사용방법]
     * 1) Route의 경로 이름은 변경해 중다
     *     <Route path="/경로이름:파라미터이름">
     * 
     * 2) 실데 이동해야하는 경로에 파라미터 값을 추가해 준다
     *     <Link to="/경로이름/3">
     * 
     * 3) 파라미터 정보가 필요한 텀포넌트로 와서 호출한다
     *     let {파라미터이름} = useparams()
     */

    /** useSearchParams
     * - url의 ? 이후에 적힌 쿼리값을 가져와서 사용
     * - 여러 값을 사용할 수 있다
     * - 인기글, 품절상태, 검색기능, 필터링 기능, 광고에 따른 url변화 등
     * - URL 길이 제한
     * 
     * [사용방법]
     * 1) 경로지정에 서치params 내용을 추가한다
     *  - /경로?속성=값
     * 
     * 2) 서치파라미터 정보가 필요하 ㄴ곳에 와서 호출한다
     *  const [query, setQuery] = useSearchParams()
     *  사용 : query.get('속성')
     * 
     */


    let { num } = useParams()

    const [query, setQuery] = useSearchParams()
    console.log('query',query.get('best'))
    console.log('query',query.get('new'))


  return (
    <div>
        {num}번째 상품입니다.
        </div>
  )
}

export default Product
