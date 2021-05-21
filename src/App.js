
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Functional from './Functional';
import Register from './Register'

import 'bootstrap/dist/css/bootstrap.min.css'

import{
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Users from './Users';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}>
      
      </Route>
      <Route path="/dashboard" exact component={Dashboard}>
    
     </Route>
     <Route path="/register" exact component={Register}>
    
     </Route>
    
      < Route path="/functional" exact component={Functional}>
    
     </ Route>
     < Route path="/users" exact component={Users}>
    
    </ Route>
     {/* <Route path="/edit/:id" exact component={Edit}>
      
      </Route> */}
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
