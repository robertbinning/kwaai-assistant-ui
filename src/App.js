import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AgentCatalogue from "./pages/AgentCatalogue";
import AddAgent from "./pages/AddAgent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/agent-catalogue" element={
          <PrivateRoute>
            <AgentCatalogue />
          </PrivateRoute>
        } />
        <Route path="/add-agent" element={
          <PrivateRoute>
            <AddAgent />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
