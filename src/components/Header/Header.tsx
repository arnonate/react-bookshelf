import React from "react";

import logo from "../../images/logo.svg";

export const Header = (): JSX.Element => (
  <header>
    <h1 className="sr-only">React Bookshelf</h1>
    <img src={logo} className="logo" alt="React Bookshelf" />
  </header>
);
