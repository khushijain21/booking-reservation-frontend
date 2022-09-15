import {Link} from 'react-router-dom';
import '../styles/nav.css'
const Navbar = () => {
    return ( 
    <>
    <nav className="nav">
        <h3 className="nav__heading">lamabooking</h3>
        <div className="nav__links">
            {/* <Link className="nav__link">all questions</Link>
            <Link className="nav__link">Add question</Link>
            <Link className="nav__link">Find People</Link>
            <Link className="nav__link">Dashboard</Link> */}
        </div>
        
        <div className="nav__action">
            <button 
                className="nav__link nav__link--1" 
                // onClick={handleLogout}
            >Logout</button>
        </div>
        </nav>
    </> 
    );
}
 
export default Navbar;

