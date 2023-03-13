import React, { useEffect, useState } from "react";
import "./header.scss";
import images from './../../../../assets';
import { FaBars, FaChevronLeft } from "react-icons/fa";

const Header = () => {
const [isSticky, setSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  
   const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
     
    if (isOpen) {
      setIsOpen(false);
    } else
     setIsOpen(true);
   };
  
  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container header">
        <div className="logo">
          <img src={images.logo} alt="" width={200} />
        </div>
        <nav>
          <ul className="nav-items">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </nav>
        <FaBars onClick={handleMenuClick} className="btn-mobile" />
        <nav className={isOpen ? "isOpen" : "isClose"}>
          <div className="mobile-menu-header">
            <FaChevronLeft onClick={handleMenuClick} className="leftIcon"/>
            <img src={images.logo} alt="" width={100} />
          </div>
          <ul className="nav-items">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
