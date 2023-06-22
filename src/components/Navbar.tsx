import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logout from "./Logout";
import { verifyToken } from "../auth/TokenManager";
import { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
  const context = useContext(AppContext);
  return (
    <div className="navCont">
      <nav className="navbar navbar-expand-lg  myNavbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            BCard
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                {verifyToken() && (
                  <>
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/favorites"
                    >
                      MY FAVORITES
                    </NavLink>
                  </>
                )}
              </li>
              {verifyToken() && (

<li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/mycards"
                >
                  MY CARDS
                </NavLink>
              </li>
              )}
              {context?.admin && (
 <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/sandbox"
                >
                  SANDBOX
                </NavLink>
              </li>
              )}
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary border me-4" type="submit">
                Search
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {verifyToken() && (
                  <>
                    <li className="nav-item">
                      <Logout />
                    </li>
                  </>
                )}
                {!verifyToken() && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/signup"
                      >
                        SIGNUP
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/login"
                      >
                        LOGIN
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
