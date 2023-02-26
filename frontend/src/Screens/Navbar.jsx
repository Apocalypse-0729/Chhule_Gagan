import React from "react";
import Logo from "../img/logo.png";
import "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../context/chatprovider";
function Navbar() {
  const {user} = ChatState()
  const HandleLogout=()=>{
    
    localStorage.removeItem("Chhule_Gagan_userInfo");
  }
  //console.log(user)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={Logo} className="Navbar-brand logo-img" alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 margin-navbar">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/course">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About Us
                </a>
              </li>
             
              { (user === undefined || user ===null) ?
              <li className="nav-item">
                <Button colorScheme="red" variant="outline" as='a' href = "/register">
                  Login
                </Button>
              </li>
              :
              <>
              <li className="nav-item">
                <a className="nav-link active" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" href="" onClick={HandleLogout}>
                logout
                </a>
              
              </li>
              </>
              
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
