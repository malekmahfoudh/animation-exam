import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/SplashPage";
import Main from "./components/Main";
import "./App.css";
import AttractionsPage from "./pages/AttractionsPage";
import TicketsPage from "./pages/TicketsPage";
import ContactPage from "./pages/ContactPage";

const items = [
  {
    id: 1,
    name: "Attractions",
    link: "/attractions",
  },
  {
    id: 2,
    name: "Tickets",
    link: "/tickets",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
