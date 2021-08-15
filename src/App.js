import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

import './App.css';

function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>

       {/* Add routes here👇 */}
       <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
