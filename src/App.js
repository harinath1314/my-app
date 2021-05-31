import logo from './logo.svg';

import './App.css';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import SecondClassComponent from './Components/MySecondComponent/SecondClassComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/first"><FunctionalComponent/> </Route>
        <Route path = "/second"> <SecondClassComponent></SecondClassComponent></Route>
      </Switch>
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
