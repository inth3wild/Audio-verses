import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/includes/Navbar";
import VerseofTheDay from './components/pages/VerseofTheDay';
import Intro from './components/pages/Intro';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Intro />
        <VerseofTheDay />
      </div>
    </Router>
    
  );
}

export default App;
