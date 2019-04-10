import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import UserShow from "./UserShow";
import { AnimatedSwitch } from "react-router-transition";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/" style={{ paddingRight: 13, textDecoration: "none" }}>
              Home
            </Link>
            <Link
              to="/search"
              style={{ paddingRight: 13, textDecoration: "none" }}
            >
              {" "}
              Search
            </Link>
            <Link
              to="/users/leanaAlq"
              style={{ paddingRight: 13, textDecoration: "none" }}
            >
              Leana's Profile
            </Link>
          </nav>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/users/:username" component={UserShow} />
          </AnimatedSwitch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
