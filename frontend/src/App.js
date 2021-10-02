import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './components/includes/Intro';
import Navbar from "./components/includes/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Intro />
      </div>
    </Router>
    
  );
}

export default App;
