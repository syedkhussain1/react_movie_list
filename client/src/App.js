import React from "react";
import { BrowserRouter,Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Page_Stuff/Header/Header";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie"

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:movieId" component={Movie} />
      </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
