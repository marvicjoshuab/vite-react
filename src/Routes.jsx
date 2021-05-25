import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Counter from "./pages/test/Counter";
import Theme from "./pages/test/Theme";

// react-scripts
// const isDev = process.env.NODE_ENV === "development";
// vite
const isDev = import.meta.env.MODE === "development";
// let Theme;
// if (isDev) {
//   Theme = React.lazy(() => import("./pages/test/Theme"));
// }
// <React.Suspense fallback={<></>}>

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {isDev && <Route path="/test/counter" component={Counter} />}
          {isDev && <Route path="/test/theme" component={Theme} />}

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
