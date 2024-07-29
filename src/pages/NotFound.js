import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not Found!</h2>
      <p>
        Got to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
