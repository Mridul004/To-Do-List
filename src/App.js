
import './App.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
    </Router>

    <Router>
      <List title="" ></List>
    </Router>
   
    </>
  );
}

export default App;
