import React from 'react';
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar({ cartCount, onCartOpen }) {
  const [open, setOpen] = useState(false);
  const links = [["Home", "#home"], ["Our sweets", "#sweets"], ["Our story", "#story"], ["Gift boxes", "#gifts"], ["Visit us", "#visit"]];
  return (
    <header className="navbar">
      <a href="#home" className="brand" aria-label="Gowmari home">
        <span className="brand-mark">✺</span>
        <span className="brand-name">gowmari<small>SWEETS & CELEBRATIONS</small></span>
      </a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="nav-cart" onClick={onCartOpen}><ShoppingBag size={17} /> Cart <span>{cartCount}</span></button>
      </nav>
    </header>
  );
}