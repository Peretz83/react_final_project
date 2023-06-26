import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logout from "./Logout";
import { getUser, verifyToken } from "../auth/TokenManager";
import { useContext } from "react";
import { AppContext } from "../App";
import { InputBase, alpha, styled } from "@mui/material";
import { SearchContext } from "../hooks/SearContext";


const user = getUser()

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

function cleanName(){
  const userName = user
  const trimmedName = userName.firstName?.charAt(0).toUpperCase() + userName.firstName?.slice(1)
  return trimmedName
}

const Navbar = () => {
  
  const { searchValue, setSearchValue } = useContext(SearchContext);

   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
            {/* {context?.userName && (
<h5>Welcome, {cleanName()}</h5>

            )} */}
            <form className="d-flex" role="search">
             <Search >
                  <SearchIconWrapper>
                   <i className="bi bi-search"/>
                  </SearchIconWrapper>
                  <StyledInputBase
                    onChange={handleSearchChange}
                    placeholder="Search…"
                    value={searchValue}
                    sx={{ width: "300px" }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                {verifyToken() && (
                  <>
                    <li className="nav-item">
                      <Logout />
                    </li>

                     <li className="nav-item ">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/"
                      >
                        <i  className="bi bi-person-circle"/>
                      </NavLink>
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
