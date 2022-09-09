import React from "react";
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    render() {
        return (
            <nav className="Nav">
                <Link to="/about"><span>About</span></Link>
                <Link to="/career"><span>Career</span></Link>
                <Link to="/projects"><span>Projects</span></Link>
                <Link to="/blog"><span>Blog</span></Link>
                <Link to="/contact"><span>Contact</span></Link>
            </nav>
        )
    }
}

export default Nav