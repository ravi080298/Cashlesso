import React from "react";
//import { AiOutlineSetting } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-first">
        <p className="header-text">CLUB APPAREL</p>
        <p className="header-paragraph">NO CARDS, ONLY REWARDS</p>
      </div>
      <LogOut />
    </div>
  );
};

const LogOut = () => {
  return (
    <div className="header-second">
      <p className="logout">Logout</p>
    </div>
  );
};
