import React from 'react';
import bankService from './services/bank.service';
import {Formik} from 'formik';
import './Register.css'

class Register extends React.Component{
    // state={
        
    //     acno:'',
    //     username:'',
    //     password:''
    // }
    // usernameChange=(event)=>{
    //     this.setState({
    //         username:event.target.value
    //     })
    // }
    // accnoChange=(event)=>{
    //     this.setState({
    //         acno:event.target.value
    //     })
    // }
    // pswdChange=(event)=>{
    //     this.setState({
    //         password:event.target.value
    //     })
    // }
    handleSubmit=(values)=>{
       // event.preventDefault();
      
      // alert("AccountNumber:"+this.state.acno)
       //alert("Username:"+this.state.username)
      // alert("Password:"+this.state.password)
       bankService.register({
          
           acno:values.acno,
           username:values.username,
           password:values.password
       }).then(data=>{
        
           alert(data.data.message)
           alert("Please Login")
           this.props.history.push("/")
       }).catch(error=>{
           alert(error.response.data.message)
           this.props.history.push("/")
       })
    }
    render(){
        return <div className="register">
            <h1>Welcome to SBI Bank</h1>

            <div className="jumbotron">
                <Formik
                  initialValues={{
                      acno:'',
                      username:'',
                      password:''
                  }}
                  validate={values=>{
                      const errors={};
                      if(!values.acno){
                          errors.acno="Account number is Required"
                      }
                      if(!values.username){
                        errors.username="Username is Required"
                    }
                    if(!values.password){
                        errors.password="Password is Required"
                    }
                    return errors;
                  }}
                  onSubmit={(values=>{
                     this.handleSubmit(values)
                  })}
                  >
                      
                  {
                      
                      (props)=>(<form onSubmit={props.handleSubmit}>
                        <div className="mb-4">
                                <label htmlFor="acno" >AccountNumber</label>
                                <input onChange={props.handleChange} type="text" name="acno" className='form-control'></input>
                                <p className="styles">{props.errors.acno}</p>
                                
                            </div>
            
                            <div className="mb-4">
                                <label htmlFor="username" >UserName</label>
                                
                            <input onChange={props.handleChange} type="text" name="username" className="form-control"></input>
                            <p className="styles">{props.errors.username}</p>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="password" >Password</label>
                                <input onChange={props.handleChange} type="password" name="password" className="form-control"></input>
                                <p className="styles">{props.errors.password}</p>       
                            </div>
                            <div className="mb-4 text-center">
                                <button className="btn btn-primary" value="submit" type="submit">Register</button>
            
                            </div>
                        </form>)
                      }
            
            </Formik>
            </div>
        </div>
    }
}
export default Register;