import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "CONFIGURATION",
    // icon: <AiOutlineSetting />,
    Link: "/setting",
  },
  {
    name: "LOYALTY MANAGEMENT",
    Link: "/loyaltymanagers",
  },
  {
    name: "MANAGE USERS",
    Link: "/manageusers",
  },
  {
    name: "MANAGE MEMBERS",
    Link: "/managemembers",
  },
  {
    name: "COUPON MANAGEMENT",
    Link: "/couponmanagement",
  },
  {
    name: "CAMPAIGN MANAGEMNT",
    Link: "/campaignmanagement",
  },
  {
    name: "OTHERS",
    Link: "/others",
  },
  {
    name: "ADVISORY",
    Link: "/advisory",
  },
  {
    name: "REPORTS",
    Link: "/reports",
  },
];
export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-bar">
        <div className="menu-container">
          {navItems.map((navItem, index) => (
            <Link key={index} to={navItem.Link}>
              <div className="menu-item">
                <label className="item-name">{navItem.name}</label>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
