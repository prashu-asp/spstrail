import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { Bars } from "./navbarelements";
import "./navbar.css";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function toggleNav() {
    setToggleMenu(!toggleMenu);
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      <header className="Header">
        <img
          src="https://signalprocessingsociety.org/sites/default/files/styles/blog_large_image/public/new_logo_header_NewsletterArticle_LG.jpg?itok=wJjRsCsu"
          className="logo"
          alt="logo"
        />
        {(toggleMenu || screenWidth > 700) && (
          <nav className="Nav">
            <Link to="/about">
              <li className="items">About</li>
            </Link>
            <Link to="/domains">
              <li className="items">Domains</li>
            </Link>
            <Link to="/events">
              <li className="items">Events</li>
            </Link>
            <Link to="/projects">
              <li className="items">Projects</li>
            </Link>
            <Link to="/board">
              <li className="items">Board</li>
            </Link>
            <Link to="/contact">
              <li className="items">Contact</li>
            </Link>
            <button className="items">Signup</button>
          </nav>
        )}
        <Bars onClick={toggleNav} className="Bars" />
      </header>
      <div className="backgroundimage">
        <h1>IEEE SIGNAL PROCESSING SOCIETY</h1>
        <hr />
        <h2>VIT VELLORE STUDENT CHAPTER</h2>
        <hr />
        {/*<Hero
        desktopimg="https://chennai.vit.ac.in/wp-content/uploads/2020/01/sense_banner.jpg"
        />*/}
      </div>
    </>
  );
}

export default NavBar;
