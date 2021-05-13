import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { AddData } from "./AddData";

const templateItem = [
  {
    name: "Viewtemplate",
    Link: "/viewtemplate",
  },
  {
    name: "Create Template",
    Link: "/createTemplate",
  },
];

export const TemplateManagemnt = () => {
  return (
    <div>
      <Router>
        <TemplateMenu />
        <Switch>
          <Route
            path="/viewtemplate"
            render={(props) => <AddData {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

const TemplateMenu = () => {
  return (
    <div>
      {templateItem.map((templateItem, index) => (
        <Link key={index} to={templateItem.Link}>
          <label>{templateItem.name}</label>
        </Link>
      ))}
    </div>
  );
};
