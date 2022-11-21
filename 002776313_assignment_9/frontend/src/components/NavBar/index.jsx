import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context";
import { getCookie } from "../../utilities/cookie";
import "./index.scss";

const NavBar = () => {
  const { isAuth, onLogout } = useContext(AuthContext);
  return (
    <div>
      <header className="navWrapper">
        <nav className="nav">
          <div className="nav right">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-link-span">
                <span className="u-nav">Home</span>
              </span>
            </NavLink>
            <NavLink
              to="about-us"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-link-span">
                <span className="u-nav">About</span>
              </span>
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-link-span">
                <span className="u-nav">Contact</span>
              </span>
            </NavLink>
            <NavLink
              to="jobs"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-link-span">
                <span className="u-nav">Jobs</span>
              </span>
            </NavLink>
            {!isAuth ? (
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <span className="nav-link-span">
                  <span className="u-nav">Login</span>
                </span>
              </NavLink>
            ) : (
              <button className="nav-link" onClick={onLogout}>
                <span className="nav-link-span">
                  <span className="u-nav">Logout</span>
                </span>
              </button>
            )}
          </div>
        </nav>
      </header>
      {/* <main>
        <section id="home"></section>
        <section id="about"></section>
        <section id="work"></section>
        <section id="contact"></section>
      </main> */}
    </div>
  );
};

export default NavBar;
