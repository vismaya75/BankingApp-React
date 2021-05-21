import React,{Component} from 'react'
import bankService from './services/bank.service'
class Users extends Component{
    state={
        users:[]
    };
    componentDidMount(){ //to get users listing
        bankService.getUsers().then(users=>{
            this.setState({
                users
            })
        })
    }
    delete(userId){
        bankService.deleteUser(userId).then(users=>{
            alert("user deleted")
        })
    }
    edit(userId){
        this.props.history.push("/edit/"+userId)
    }
    render(){
        
        return <div>
            <table>
                <tbody>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>actions</td>
                </tr>
                {
                    this.state.users.map(user=><tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button onClick={()=>this.delete(user.id)}>Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    }
}
export default Users;