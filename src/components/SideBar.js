import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import "../static/css/SideBar.css";

class SideBar extends React.Component {

    render() {
        return (
            <menu className="SideBar">
                <Logo />
                <Nav />
                <Socials />
            </menu>
        )
    }
}

export default SideBar