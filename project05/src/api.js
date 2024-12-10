import axios from 'axios'; 

const api = axios.create({
    headers : { "Content-Type" : "application/json"},
    baseURL : 'http://localhost:3000'
    // 배포를 하거나, URL 을 수정해야할 때 
    // 여러번 수정할 필요 없이 baseURL 하나만 수정하면 된다.
})

export default api; 