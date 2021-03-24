import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4  px1">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Information</a>
          </li>
          <li>
            <a href="/">To do list</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
