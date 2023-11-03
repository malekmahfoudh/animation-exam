import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/SplashPage";
import Main from "./components/Main";
import "./App.css";
import AttractionsPage from "./pages/AttractionsPage";
import TicketsPage from "./pages/TicketsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
