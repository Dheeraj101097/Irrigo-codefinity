import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Routes, Route } from "react-router-dom";
import "chart.js/auto"; // Automatically register all chart components
import backgroundImage from "./assets/image.png";
import Dashboard from "./pages/Dashboard";
const bkg = backgroundImage;
import CropDatabase from "./pages/CropDatabase";
import Home from "./pages/Home";
import ViewMore from "./pages/ViewMore";
import { Analytics } from "@vercel/analytics/next";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewmore" element={<ViewMore />} />
        <Route path="/cropdatabase" element={<CropDatabase />} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
