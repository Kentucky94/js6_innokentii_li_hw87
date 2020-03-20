import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const Header = () => {
  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RouterNavLink} to="/" className='mr-auto'>Forum App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;