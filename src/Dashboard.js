import React from 'react';
import './Dashboard.css'

class Dashboard extends React.Component{
    handleSubmit=(event)=>{
        alert("Account credicted")
    }
    handleeSubmit=(event)=>{
        alert("Account Debited")
    }
    render(){

        return<div className="dashboard">
            <h1>Welcome to SBI Bank</h1>
            <br></br>
        
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                

                        <div className="row">
                            <div className="col">
                                <h2>Cash Deposit Form</h2>
                                <br></br>

                                <table>
                                    <tr>
                                        <td>AccountNumber</td>
                                        <td><input type="text"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input type="password"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                        <td><input type="text"></input></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td><button type="submit" class="btn btn-primary">Deposit</button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <form onSubmit={this.handleeSubmit}>
                <div className="container">
            
                        <div className="row">
                            <div className="col">
                                <h2>Cash Withdraw Form</h2>
                                <br></br>

                                <table>
                                    <tr>
                                        <td>AccountNumber</td>
                                        <td><input type="text"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input type="password"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                        <td><input type="text"></input></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td><button type="submit" class="btn btn-primary">Withdraw</button></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                </div>
                
            </form>
            <br></br>
            <br></br>

            <br></br>

        </div>
    }
}
export default Dashboard;



