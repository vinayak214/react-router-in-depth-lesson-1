import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div>
      <div>
        <h2>Careers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          beatae?
        </p>
        <Outlet />
      </div>
    </div>
  );
};

export default CareersLayout;
