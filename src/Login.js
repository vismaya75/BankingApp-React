import React from 'react'
import './Login.css'
import bankService from './services/bank.service';
import {Formik} from 'formik';
import { Link } from 'react-router-dom';

class Login extends React.Component{
     
    // state={ //to store data in state
    //     acno:'',
    //     password:''
    // }
    // accnoChange=(event)=>{
    //     this.setState({
    //          acno:event.target.value
    //     }) 
    //    // alert(username)fi
    // }

    // pswdChange=(event)=>{
    //     this.setState({
    //     password:event.target.value
    //    // alert(password)
    // })
    // }

    handleSubmit=(values)=>{
      //  event.preventDefault();
        bankService.login
        ({
            acno:values.acno,
            password:values.password
        })
        .then(data=>{
            this.props.history.push("/dashboard");

        })
        .catch(error=>{
           // console.log(error);
            alert(error.response.data.message)
            
        })
        //alert("login success")
        //this.props.history.push("/dashboard")
    }


     render(){
         return <div className="login">
                 <h1>Welcome To SBI Bank</h1>
                 <div className="jumbotron">
                 <Formik
                 initialValues={{
                     acno:'',
                     password:''
                 }}
                 validate={values=>{
                     const errors ={};
                     if(!values.acno){
                         errors.acno="Account number is required";
                     }
                     if(values.acno.length<=3){
                        errors.acno="Account number length must be 4";
                    }
                   if(/^[0-9]*$/.test(values.acno)===false){
                       
                    errors.acno="Account number should only number";

                   }
                     if(!values.password){
                        errors.password="Password is required";
                    }
                    return errors;
                 }}
                 onSubmit={(values=>{
                    this.handleSubmit(values)
                 })}
                 >
                 {
                    
                 
       (props)=> (<form onSubmit={props.handleSubmit}>
        <div className="mb-4">
            <label htmlFor="accno" className="form-label">AccountNumber: </label>
            <input onChange={props.handleChange} type="text" className="form-control" name="acno" >
              
            </input>
           {/* {touched.acno && errors.email &&  */}
           <p className="styles">{props.errors.acno}</p>
           {/* } */}
            {/* <input onChange={this.accnoChange} type="text" className="form-control" name="acno" ></input> */}

        </div>
        <div className="mb-4">
            <label htmlFor="pswd" className="form-label">Password :</label>
            <input onChange={props.handleChange} type="password" name="password" className="form-control">
            </input>
            <p className="styles">{props.errors.password}</p>

            {/* <input onChange={this.pswdChange} type="password" name="password" className="form-control"></input> */}
        </div>

        <div className="mb-4 text-center">
            <button className="btn btn-primary" type="submit" value="submit" >Login</button><br></br>
            <Link to="/register" >Register</Link>
        </div>

        </form>)
     }
        </Formik>
        </div>
    
         </div>
        
     }
}
export default Login;