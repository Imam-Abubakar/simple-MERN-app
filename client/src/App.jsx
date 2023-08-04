import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Landing from "./pages/landing";
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
