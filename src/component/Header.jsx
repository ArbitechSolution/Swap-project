import React from "react";
import { Container } from "react-bootstrap";
import "./Style.css";
import Proflie_pic from '../Assets/Images/Profile.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-background">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="col-md-4 d-flex justify-content-around bg">
      <div><span><img src={Proflie_pic} width="20px" height="20px"/></span>14.33B</div>
      <div className=""><i class="fa-solid fa-globe"></i></div>
      <div className=""><i class="fa-solid fa-gear"></i></div>
      <button className="btn btn-1 rounded-pill" type="submit">BNB Smart Chain</button>
        <button className="btn rounded-pill" type="submit">Connect Wallet</button>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header;
