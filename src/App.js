import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogOut from "./components/LogOut";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/friendslist">FriendsList</Link>
          </li>
          <li>
            <Link to="/addfriends">Add Friends</Link>
          </li>
        </ul>
        <LogOut />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/friendslist">
            <FriendsList />
          </Route>
          <Route path="/addfriends">
            <AddFriends />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
