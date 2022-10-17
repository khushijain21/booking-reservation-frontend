import {Link} from 'react-router-dom';
import '../styles/nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return ( 
    <>
    <nav className="nav">
        <h3 className="nav__heading">bookingapp</h3>
        {/* <div className="nav__links">
            <Link to='/'className="nav__link">All Questions</Link>
            <Link to='/' className="nav__link">Add question</Link>
            <Link to='/' className="nav__link">Find People</Link>
            <Link to='/' className="nav__link">Dashboard</Link> 
        </div> */}

        <div className="nav__search">
        <input type="text" className="nav_search_field" placeholder='Search Hotels'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
        </div>
        
        
        <div className="nav__action">
            <button 
                className="nav__link nav__link--2" 
                // onClick={handleLogout}
            >Logout</button>
        </div>
        </nav>
    </> 
    );
}
 
export default Navbar;

