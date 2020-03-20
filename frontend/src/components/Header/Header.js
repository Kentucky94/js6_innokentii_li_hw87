import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const Header = () => {
  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RouterNavLink} to="/" className='mr-auto'>reactstrap</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;