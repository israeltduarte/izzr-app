import React from "react";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/about"><span><FormattedMessage id="nav.about" defaultMessage="" /></span></Link>
            <Link to="/career"><span><FormattedMessage id="nav.career" defaultMessage="" /></span></Link>
            <Link to="/projects"><span><FormattedMessage id="nav.projects" defaultMessage="" /></span></Link>
            <Link to="/contact"><span><FormattedMessage id="nav.contact" defaultMessage="" /></span></Link>
        </nav>
    )
}

export default Nav;