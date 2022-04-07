import React from "react";
import Logo from "../../logo192.png";

const Header = () => {
  return (
    <div className="d-flex py-4 justify-content-center align-items-center">
      <img src={Logo} alt="logo" className="w-auto mr-2" height="65px" />
      <h4>GraphQL</h4>
    </div>
  );
};

export default Header;
