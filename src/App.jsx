import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PartnerDetails from "./pages/Partners/partner-details/PartnerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/partner/:partnerId" element={<PartnerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
