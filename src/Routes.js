import React from "react";
import { ProtectedRoute } from "components";
import Grid from "pages/Grid";
import Customer from "pages/Customer";
import Dashboard from "pages/Dashboard";
import Signup from "pages/Signup";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route
          path="/customer"
          element={<ProtectedRoute element={Customer} />}
        />
        <Route path="/grid" element={<ProtectedRoute element={Grid} />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
