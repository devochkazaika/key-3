
import { React } from "react";
import { Menu, Link } from "./NavbarElements"
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <Menu>
            <Link to="/about" name="About"/>
            <Link to="/" name="Home"/>
        </Menu>
    );
};

export default Navbar;