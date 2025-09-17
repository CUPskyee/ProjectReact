import React from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <h1> CRUD dengan ReactJS + MockAPI</h1>
      <UserList />
    </div>
  );
}

export default App;
