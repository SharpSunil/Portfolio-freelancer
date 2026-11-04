
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Project", path: "/#project" },
    { name: "Process", path: "/#process" },
    { name: "Testimonial", path: "/#testimonial" },
  ];

  const handleNavigation = (path) => {
    setMenuOpen(false);

    if (path.includes("#")) {
      const sectionId = path.split("#")[1];

      if (location.pathname !== "/") {
        navigate(path);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate(path);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="header-parent parent">
      <div className="header-cont container">
        <header className="header-main">

          <Link
            to="/"
            className="header-logo"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="logo-icon">S</div>

            <div className="logo-content">
              <h3>Sunil Shelke</h3>
              <span>Full-Stack Web Developer</span>
            </div>
          </Link>

          <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
            {navLinks.map((item, index) => (
              <button
                type="button"
                key={index}
                className={
                  (location.pathname === "/" && index === 0) ||
                  location.pathname === item.path
                    ? "active"
                    : ""
                }
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="header-talk"
            onClick={() => handleNavigation("/#contact")}
          >
            Let's Talk
            <span>
              <ArrowUpRight size={19} />
            </span>
          </button>

          <button
            type="button"
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
