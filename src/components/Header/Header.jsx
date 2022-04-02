import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <h1>Delta Health</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
