import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FloatingNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavbarAnimation = (show) => {
    if (show) {
      gsap.to("#floating-navbar", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to("#floating-navbar", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  const checkScrollPosition = () => {
    const highlightSection = document.getElementById("highlights");
    if (!highlightSection) return;

    const highlightPosition = highlightSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    const highlightHeight = highlightSection.offsetHeight;

    const triggerPoint =
      highlightPosition <= screenHeight - highlightHeight / 2;

    setIsNavbarVisible(triggerPoint);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    handleNavbarAnimation(isNavbarVisible);
  }, [isNavbarVisible]);

  return (
    <header
      id="floating-navbar"
      className="fixed top-0 left-0 w-full bg-zinc z-50 py-3 px-5 md:px-10 flex justify-between items-center border-b border-[#4A4A4A]"
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      <div className="text-xl font-bold text-white md:ml-56">📍🎰 CASINO W3W</div>

      {/* Desktop Navigation links and Buy Button */}
      <nav
        className="hidden text-sm md:flex gap-x-8"
        style={{ fontSize: "0.75rem", marginRight: "230px" }}
      >
        <Link to="https://map.casinow3w.com" className="relative text-white">
          Map
          <span className="absolute left-0 bottom-[-15px] w-full h-[0.1px] bg-white"></span>
        </Link>
        <Link to="https://fun.luvnft.com" className="text-white">
          Social
        </Link>
        <Link to="https://live.casinow3w.com" className="text-white">
          Livestream
        </Link>
        <button
          className="text-xs text-white rounded-full bg-blue buy-btn"
          style={{ padding: "4px 12px", fontSize: "0.75rem" }}
        >
          <Link to="/Iphone16Pro">Buy</Link>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="flex items-center gap-3 ml-auto md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white"
          style={{ fontSize: "1.25rem", fontWeight: 100 }}
        >
          {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <button
          className="px-4 py-2 text-xs text-white rounded-full bg-blue"
          style={{ fontSize: "0.75rem" }}
        >
          <Link to="/Iphone16Pro">Buy</Link>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <nav
        className={`md:hidden absolute top-14 left-0 w-full bg-zinc text-sm flex flex-col gap-5 p-6 z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "hidden -translate-y-5"
        }`}
        style={{
          fontSize: "0.75rem",
          fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
        }}
      >
        <Link to="/" className="text-gray-400 transition hover:text-white">
          | Overview
        </Link>
        <Link
          to="/Switch"
          className="text-gray-400 transition hover:text-white"
        >
          | Switch from Android to iPhone
        </Link>
        <Link to="/Specs" className="text-gray-400 transition hover:text-white">
          | Tech Specs
        </Link>
      </nav>
    </header>
  );
};

export default FloatingNavbar;
