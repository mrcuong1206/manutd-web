import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="py-5 px-20">
      <Link to="/main">
        <img
          className="cursor-pointer"
          style={{ width: 75 }}
          src="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png"
          alt="manutd logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
