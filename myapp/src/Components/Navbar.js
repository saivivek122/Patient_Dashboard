import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <h2 className="logo">Jarurat Care</h2>

      <button className="nav-toggle" onClick={() => setOpen((o) => !o)}>
        ☰
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/patients" onClick={() => setOpen(false)}>Patients</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
