import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h3>Website Help</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque.
      </p>
      <nav>
        <NavLink to="Faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact US</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
