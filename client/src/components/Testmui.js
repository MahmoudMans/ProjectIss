import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Testmui() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Testmui;
