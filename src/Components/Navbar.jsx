import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar= ()=>{
    return(<>
    <nav>
    <h4><NavLink className='links' to="/">React Demo</NavLink></h4> 
    <ul>
        <li><NavLink className='links' to="/">Home</NavLink></li>
        <li><NavLink className='links' to="/service">Services</NavLink></li>
        <li><NavLink className='links' to="/About">About</NavLink></li>
        <li><NavLink className='links' to="/weather">Weather</NavLink></li>
        <li><NavLink className='links' to="/news">News</NavLink></li>
        <li><NavLink className='links' to="/Contact">Contact Us</NavLink></li>
    </ul>
    </nav>
    </>);
  }
  
  export default Navbar;