import React from "react";
import Posts from "./Posts";
import Users from "./Users";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </div>
  );
}

export default App;