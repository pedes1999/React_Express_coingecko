import React from "react";
import logo from "../assets/dollarlogo.png";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid text-primary">
        <a className="navbar-brand text-dark" href="/">
          <img
            src={logo}
            alt=""
            width="40"
            height="30"
            className="d-inline-block align-text-mid "
          />
          Cryptocurrencies
        </a>
        <a className="navbar-brand text-dark m-lg-2" href="/">
          <FaHome style={{ marginBottom: "5px" }} /> Home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
