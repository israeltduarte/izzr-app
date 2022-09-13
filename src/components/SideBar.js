import React from "react";
import "../static/css/SideBar.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const SideBar = () => {
    return (
        <menu className="SideBar">
            <Logo />
            <Nav />
            <Socials />
        </menu>
    )
}

export default SideBar;