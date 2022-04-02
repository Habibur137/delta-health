import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="px-20 md:flex justify-between text-2xl text-gray-500 bg-slate-100 h-10">
      <div>
        <h1>Delta Health</h1>
      </div>
      <div>
        <Link className="mr-2" to="/">
          Home
        </Link>
        <Link className="mr-2" to="/services">
          Services
        </Link>
        <Link className="mr-2" to="/pricing">
          Pricing
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
