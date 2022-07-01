import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default Main;
