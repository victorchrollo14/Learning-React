import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./profile";
import ToDoApp from "./To-do-app/App"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ToDo" element = {<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch
