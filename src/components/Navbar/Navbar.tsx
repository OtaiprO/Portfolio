import { useState, useEffect } from "react";
import "./Navbar.css";
import { MobileNav } from "./MobileNav/MobileNav";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };


  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={`${process.env.PUBLIC_URL}/assets/images/logo-white.svg`} alt="" />
          <ul>
            <li className="menu-item">
              <a href="#home-section">Home</a>
            </li>
            <li className="menu-item">
              <a href="#skills-section">Skills</a>
            </li>
            <li className="menu-item">
              <a href="#projects-section">Projects</a>
            </li>
            <li className="menu-item">
              <a href="#contacts-section">Contacts</a>
            </li>
            <a href="#contacts-section">
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <div className="burger-menu-wrapper">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};
