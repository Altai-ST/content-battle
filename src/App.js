import './App.css';

import { SingIn } from './components/SingIn';
import { Leading } from './components/Leading'
import { SingUpOne } from './components/SingUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginIn } from './container/SingUpFunc';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/'>
          <SingIn/>
         </Route>
         <Route path='/Lead'>
           <Leading/>
         </Route>
         <Route path='/Reg'>
           <SingUpOne/>
          {/* <LoginIn/> */}
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
