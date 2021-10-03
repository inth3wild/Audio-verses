import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/includes/Navbar";
import Intro from './components/pages/Intro';
import Result from './components/pages/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Intro />
        <Result />
      </div>
    </Router>
    
  );
}

export default App;
