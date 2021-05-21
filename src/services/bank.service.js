import axios from 'axios'

const baseUrl="http://localhost:2000"

const register =(data)=>{
    return axios.post(baseUrl+"/register",data,{
        withCredentials:true
    })
}

const login =(data)=>{
    return axios.post(baseUrl+"/login",data,{  //ajax calling api from backend to frond end
        withCredentials:true
    })
}
// const getUsers =(data)=>{
//     return axios.get(baseUrl+"/users",data,{
//         withCredentials:true
//     })
// }
const deposit =(data)=>{
    return axios.post(baseUrl+"/deposit",data,{
        withCredentials:true
    })
}
const withdraw =(data)=>{
    return axios.post(baseUrl+"/withdraw",data,{
        withCredentials:true
    })
}
export default{
    register,
    login,
    deposit,
    withdraw,
   // getUsers

}