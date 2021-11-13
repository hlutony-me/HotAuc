import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from 'react';
import { UserContext } from "./auth-component/UserContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const value = useContext(UserContext);
  if(value.user["email"]){
return(
  <header className="navbar">
    <Link to="/" className="navbar__title navbar__item">HotAuc</Link>
    <Link to="/" className="navbar__item">Home</Link>
    <div to="" className="navbar__item">Hello, {value.user["email"]} </div>
    <Link to="/" className="navbar__item">Contact Us</Link>
    <Link to="/" className="navbar__item" onClick="Logout">Logout</Link>
  </header>
);
  }
  else{
    return(
      <header className="navbar">
        <Link to="/" className="navbar__title navbar__item">HotAuc</Link>
        <Link to="/" className="navbar__item">Home</Link>
        <Link to="/api/auth/login" className="navbar__item">Login</Link>
        <Link to="/api/auth/register" className="navbar__item">Register</Link>
        <Link to="/" className="navbar__item">Contact Us</Link>
      </header>
    );
  }
  
  
};

const Logout = ()=>{
  const navigate = useNavigate();
  const appContext = useContext(UserContext);
  appContext.setUserContext({
    user:{},
    token:""
  });
  navigate("/");
}

function Navbar1() {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default Navbar1;
