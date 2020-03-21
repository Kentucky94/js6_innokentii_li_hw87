import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousNav = () => {
  return (
    <>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/login">Login</NavLink>
      </NavItem>
    </>
  );
};

export default AnonymousNav;