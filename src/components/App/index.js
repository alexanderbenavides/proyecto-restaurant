import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../../config/routes";
function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, key) => (
            <RoutesWithSubRoutes key={key} {...route} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

function RoutesWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    ></Route>
  );
}

export default App;
