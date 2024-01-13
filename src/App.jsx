import React from "react";
import Login from "./pages/Auth/Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <div>
        <Dashboard />
      </div>
      {/* <Login /> */}
    </Router>
  );
}

export default App;
