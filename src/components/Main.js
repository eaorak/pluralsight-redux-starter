import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import CoursesPage from "./course/CoursesPage";
import AboutPage from "./about/AboutPage";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </main>
);

export default Main;
