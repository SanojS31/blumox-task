import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import CategoryList from "./components/CategoryList";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<CategoryList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
