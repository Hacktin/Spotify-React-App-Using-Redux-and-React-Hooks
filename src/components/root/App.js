import React from "react";
import { Switch, Route } from "react-router-dom";

import Playlist from "../PlayList/Playlist";
import Artist from "../Artist/Artist";
import Navi from "../Navi/Navi";
import Home from "../Home/Home";

function App() {
  return (
    <div>
      <Navi />
      <Switch>
        <Route path="/playlist" exact component={Playlist} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
