import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/About";
import Header from "./component/Header";
import Navigation from "./pages/Navigation";
import gsap from "gsap";

import "./styles/App.scss";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "caseStudies", Component: CaseStudies },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About },
];

function deBounce(fn, time = 200) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(null, arguments);
    }, time);
  };
}

const App = () => {
  let [dimention, setDimention] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    let deBounceed = deBounce(function () {
      setDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      let vh = dimention.height * 0.01;
      // replace the vh in css
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      gsap.to(["body", "html"], {
        duration: 0,
        css: { visibility: "visible" },
      });
      console.log(vh);
    }, 200);

    window.addEventListener("resize", deBounceed);

    return () => window.removeEventListener("resize", deBounceed);
  });

  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component dimention={dimention} />
            </Route>
          ))}
        </Switch>
      </div>
      <Navigation />
    </>
  );
};

export default App;
