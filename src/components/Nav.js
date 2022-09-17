import React from "react";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import commons from "../data/commons.json";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to={commons.nav.endpoint_about}>
                <span><FormattedMessage id="content.pages.about.title" /></span>
            </Link>
            <Link to={commons.nav.endpoint_career}>
                <span><FormattedMessage id="content.pages.career.title" /></span>
            </Link>
            <Link to={commons.nav.endpoint_projects}>
                <span><FormattedMessage id="content.pages.projects.title" /></span>
            </Link>
            <Link to={commons.nav.endpoint_contact}>
                <span><FormattedMessage id="content.pages.contact.title" /></span>
            </Link>
        </nav>
    )
}

export default Nav;