
import './App.css';
import Header from './Header'
import Home from './Home';
import Iphone from './Iphone';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <>
    
    <Header/>
    <Router>
    <Switch>
      
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path="./Iphone">
        <Iphone/></Route>
    
      </Switch>
  </Router>
  </>
  );
}

export default App;
