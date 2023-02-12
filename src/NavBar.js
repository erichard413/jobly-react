import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({user, logout}) {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
    navigate('/', {replace: true});
  }
  return (
    <div className="Nav">
      <Navbar expand="md">
        <NavLink exact to="/home" className="navbar-brand">
          Jobly 
        </NavLink>
        

        <Nav className="ml-auto" navbar>
          {user && <NavItem><NavLink to="/companies">Companies</NavLink></NavItem>}
          {user && <NavItem><NavLink to="/jobs">Jobs</NavLink></NavItem>}
          {user && <NavItem><NavLink to="/profile">Profile</NavLink></NavItem>}
          {user && <NavItem><NavLink to="/applied">Applied</NavLink></NavItem>}
          <NavItem>
          {user ? <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink> : <NavLink to="/login">Login</NavLink> }
          </NavItem>
          {!user && <NavItem><NavLink to="/signup">Sign Up</NavLink></NavItem>}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;