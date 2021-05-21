import React from 'react';
import Deposit from './Deposit'
import Withdraw from './Withdraw';
import './Dashboard.css';



class Dashboard extends React.Component{
    

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
        alert("AccountNumber:"+this.state.acno)
        alert("Password:"+this.state.password)
        alert("Amount:"+this.state.amount)
    //     bankService.deposit({
    //         acno:this.state.acno,
    //         password:this.state.password,
    //         amount:this.state.amount
    //    }).then(data=>{
    //        // this.props.history.push("/dashboard");
    //        alert("Account credict")
    //     })
    //       .catch(error=>{
    //    // console.log(error);
    //         alert(error.response.data.message)
    //     })



    }

    render(){

        return<div className="dashboard">
            <br></br>
            <Deposit/>
            <Withdraw/>
            {/* <h1>Welcome to SBI Bank</h1>
            <br></br>
        
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                

                        <div className="row">
                            <div className="col">
                                <br></br>
                                <h2>Cash Deposit Form</h2>
                                <br></br>

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
                                        <td><button type="submit" className="btn btn-primary">Deposit</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                
            </form> */}
            
            {/* <form onSubmit={this.handleSubmit}>
                <div className="container">
            
                        <div className="row">
                            <div className="col">
                                <h2>Cash Withdraw Form</h2>
                                <br></br>

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
                
            </form> */}

        </div>
    }
}
export default Dashboard;



