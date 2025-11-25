import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar({ onLogout }) {
  return (
    <nav className="navbar">
      <h2>App CRUD</h2>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/cadastro" className="nav-btn">Cadastro</Link>
        <Link to="/lista" className="nav-btn">Lista</Link>
      </div>
      <button className="logout-btn" onClick={onLogout}>Sair</button>
    </nav>
  );
}

export default NavBar;
