import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <nav className='header'>
      <ul>
        <li><Link to="counter"> Counter </Link></li>
        <li><Link to="about"> About </Link></li>
        <li><Link to="contact"> Contact </Link></li>
        <li><Link to="services"> Services </Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default App;
