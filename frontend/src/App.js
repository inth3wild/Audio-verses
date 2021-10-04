import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/includes/Navbar";
import Intro from './components/pages/Intro';

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
