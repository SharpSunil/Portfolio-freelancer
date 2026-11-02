
import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.scss";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Process", link: "#process" },
    { name: "Testimonial", link: "#testimonial" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="header-parent parent">
      <div className="header-cont container">
        <header className="header-main">

          <a href="#home" className="header-logo">
            <div className="logo-icon">S</div>
            <div className="logo-content">
              <h3>Sunil Shelke</h3>
              <span>Full-Stack Web Developer</span>
            </div>
          </a>

          <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
            {navLinks.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className={index === 0 ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-talk">
            Let's Talk
            <span>
              <ArrowUpRight size={19} />
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </header>
      </div>
    </div>
  );
};

export default Header;
