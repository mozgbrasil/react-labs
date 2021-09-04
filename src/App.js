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

const OlderDrawComponent = React.lazy(() => import("./older-draw/App"));
function OlderDraw() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OlderDrawComponent />
      </Suspense>
    </div>
  );
}

const HazibiiLandingPageComponent = React.lazy(() =>
  import("./hazibii-landing-page/App")
);
function HazibiiLandingPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HazibiiLandingPageComponent />
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
          <nav>
            <ul>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/droga-raia`}>
                  Droga Raia
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/older-draw`}>
                  Older Draw
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/hazibii-landing-page`}>
                  hazibii landing page
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/index.html`}
              component={Home}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/droga-raia`}
              component={DrogaRaia}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/older-draw`}
              component={OlderDraw}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/hazibii-landing-page`}
              component={HazibiiLandingPage}
            />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
