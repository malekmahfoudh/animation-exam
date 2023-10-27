import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";
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
        <Route path="/" element={<Main />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
