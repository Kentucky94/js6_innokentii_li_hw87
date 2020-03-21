import React from 'react';
import {NavbarText, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserNav = props => {
  return (
    <>
      <NavbarText>
        {'Hello, ' + props.user.username + '!'}
      </NavbarText>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/posts/add">Add Post</NavLink>
      </NavItem>
      <NavbarText className='btn btn-danger' onClick={props.onClick}>
        Logout
      </NavbarText>
    </>
  );
};

export default UserNav;