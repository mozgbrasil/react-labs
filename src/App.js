import React, { Suspense } from "react";
// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomeComponent = React.lazy(() => import("./default/App"));
function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    </div>
  );
}
const DrogaRaiaComponent = React.lazy(() => import("./droga-raia/App"));
function DrogaRaia() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DrogaRaiaComponent />
      </Suspense>
    </div>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}

function App() {
  return (
    <>
      <Router>
        <>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/droga-raia">Droga Raia</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index.html" component={Home} />
            <Route path="/droga-raia" component={DrogaRaia} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;