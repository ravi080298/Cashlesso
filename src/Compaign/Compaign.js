import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { TemplateManagemnt } from "./TemplateManagemnt/TemplateManagemnt";

const management = [
  {
    name: "Template Management",
    Link: "/templatemanagement",
  },
  {
    name: "Customer Segment Management",
    Link: "/customersegmentmanagemnt",
  },
  {
    name: "Management Campaigns",
    Link: "/managementcompaigns",
  },
];

const Compaign = () => {
  return (
    <div>
      <Router>
        <div className="parent">
          <div className="sideNav">
            <Template />
          </div>
          <div className="linkview">
            <Switch>
              <Route
                path="/templatemanagement"
                render={(props) => <TemplateManagemnt {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};
export default Compaign;

const Template = () => {
  return (
    <div>
      {management.map((management, index) => (
        <Link key={index} to={management.Link}>
          <label className="management-item">{management.name}</label>
        </Link>
      ))}
    </div>
  );
};
