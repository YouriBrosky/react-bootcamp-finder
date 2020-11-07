import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar expand="md">
            <NavbarBrand href="/">Bootcamp Finder</NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/">Bootcamps</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/add_bootcamp">Add bootcamp</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;
