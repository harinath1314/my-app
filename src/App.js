import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import SecondClassComponent from './Components/MySecondComponent/SecondClassComponent';
import State1 from './Components/State/State1';


function App() {
  return (
    <div className="App">
       
      {/* <MainPage></MainPage>
      <SecondClassComponent  name={ {"name":"harinath", "age":"26","place":"hyderabad"} }></SecondClassComponent> */}
      <State1></State1>
    </div>
  );
}

export default App;
