import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Weather from "./Weather";
import NewsEvents from "./NewsEvents";
import ImageUpload from "./ImageUpload";
import Awards from "./Awards";
import PdfData from "./pdf";
import IntradayForecast from "./Intraday";
import DayahedForecast from "./Weekahead";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={() => { }} />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/NewsEvents" element={<NewsEvents />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/imageupload" element={<ImageUpload />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/pdfdata" element={<PdfData />} />
        <Route path="/IntradayForecast" element={<IntradayForecast />} />
        <Route path="/WeekaheadForecast" element={<DayahedForecast />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
