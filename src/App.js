import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Compaign from "./Compaign/Compaign";
import { Header } from "./header/Header";
import { Menu } from "./header/Menu";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Menu />
        <Switch>
          {/* <Route exact path="/" render={(props) =><Home {...props} />} /> */}
          <Route
            path="/campaignmanagement"
            render={(props) => <Compaign {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
