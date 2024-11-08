import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "red", marginTop: "0px" }}>
        <NavLink to="/products" style={{ color: "white", marginRight: "10px" }}>
          PRODUCTS
        </NavLink>
        <NavLink
          to="/products/create"
          style={{ color: "white", marginRight: "10px" }}
        >
          CREATE PRODUCTS
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
