
import { React } from "react";
import { NavMenu } from "./NavMenu";
import { NavLink } from "./NavLink";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (

        <NavMenu>
            <NavLink to="/about" name="About"/>
        </NavMenu>
    );
};

export default Navbar;