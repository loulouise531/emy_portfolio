//This page is the overall navigation bar where it has all the nessesary sections to each page as well added the unique logo I made with Adobe.
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img src={logoImage} alt="ES Logo" />
            </Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/education">Education</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar;