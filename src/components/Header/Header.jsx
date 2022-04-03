import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div
      style={
        pathname.includes("detail") ? { display: "none" } : { display: "flex" }
      }
      className="flex justify-center gap-4 mt-4"
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-[#44B1BA] text-white font-bold text-2xl px-2"
            : "text-2xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "bg-[#44B1BA] text-white font-bold text-2xl px-2"
            : "text-2xl"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          isActive
            ? "bg-[#44B1BA] text-white font-bold text-2xl px-2"
            : "text-2xl"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-[#44B1BA] text-white font-bold text-2xl px-2"
            : "text-2xl"
        }
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
