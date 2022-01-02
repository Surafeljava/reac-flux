import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activestyle={activeStyle} exact="true" to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activestyle={activeStyle} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activestyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
