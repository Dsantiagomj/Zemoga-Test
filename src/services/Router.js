import React from "react";
import { Router } from "@reach/router";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import HowItWorks from "../pages/HowItWorks";
import PastTrials from "../pages/PastTrials";

function AppRouter() {
  return (
    <Router>
      <Auth path="/auth" />
      <HowItWorks path="/how-it-works" />
      <PastTrials path="/past-trials" />
      <Home path="/" />
    </Router>
  );
}

export default AppRouter;
