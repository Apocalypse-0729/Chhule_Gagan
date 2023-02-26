import React from 'react'
import Logo from '../img/logo.png'
import './Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid shadow-nav">
    <img src={Logo} className='Navbar-brand logo-img' alt='Logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 margin-navbar">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/course">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/contact">Contact Us</a>
        </li>
        {/* <li className="nav-item">
          <button type="button" className="btn btn-outline-danger">Log in</button>
          </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar