import React from 'react'
import './Login.css'

class Login extends React.Component{
     
   // accountnumberChange=(event)=>{
     //   alert("login success")
    //}
    handleSubmit=(event)=>{
        alert("login success")
    }


     render(){
         return <div className="login">
                 <h1>Welcome To SBI Bank</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="mb-4">
            <label for="" className="form-label">AccountNumber</label>
            <input onChange={this.accountnumberChange} type="text" className="form-control" name="accountnumber" ></input>
        </div>
        <div className="mb-4">
            <label for="" className="form-label">Password</label>
            <input type="password" className="form-control"></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="mb-4 text-center">
            <button className="btn btn-primary" type="submit" value="submit" >Login</button>
        </div>

        </form>
      <br></br>
      <br></br>
      <br></br>
      
    
      
    
         </div>
        
     }
}
export default Login;