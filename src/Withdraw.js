import React from 'react';
import bankService from './services/bank.service'

class Withdraw extends React.Component{


    state={
        acno:'',
        password:'',
        amount:''
    }
    accnoChange=(event)=>{
        this.setState({
             acno:event.target.value
        }) 
    }

    pswdChange=(event)=>{
        this.setState({
        password:event.target.value
    
    })
    }
    amountChange=(event)=>{
        this.setState({
             amount:event.target.value
        }) 
    }
    handleSubmit=(event)=>{
        event.preventDefault();
      //  alert("AccountNumber:"+this.state.acno)
        //alert("Password:"+this.state.password)
       // alert("Amount:"+this.state.amount)
         bankService.withdraw({
            acno:this.state.acno,
            password:this.state.password,
            amount:this.state.amount
         }).then(data=>{
             //this.props.history.push("/dashboard");
           alert(data.data.message)
           alert(data.data.balance)
         })
         .catch(error=>{
            // console.log(error);
            alert(error.response.data.message)
         })

    }

    render(){

        return<div className="dashboard">


<form onSubmit={this.handleSubmit}>
                <div className="container">
            
                        <div className="row">
                            <div className="col">
                                <div className="jumbotron">
                                <h2>Cash Withdraw Form</h2>
                               

                                <table>
                                    <tbody>
                                    <tr>
                                        <td>AccountNumber</td>
                                        <td><input onChange={this.accnoChange} type="text"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input onChange={this.pswdChange} type="password"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                        <td><input onChange={this.amountChange} type="text"></input></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td><button type="submit" className="btn btn-primary">Withdraw</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>

                </div>
                
            </form>

        </div>
}
}
export default Withdraw;