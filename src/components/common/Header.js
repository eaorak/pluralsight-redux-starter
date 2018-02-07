import React from "react";
import { NavLink } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      {"  |  "}
      <NavLink activeClassName="active" to="/courses">
        Courses
      </NavLink>
      {"  |  "}
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
