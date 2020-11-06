import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Bootcamp Finder</NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink>Bootcamps</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Add bootcamp</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;
