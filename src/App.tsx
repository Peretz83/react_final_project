import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MyCards from "./pages/MyCards";
import Sandbox from "./pages/Sandbox";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useMemo, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AddCard from "./pages/AddCard";
import Footer from "./components/Footer";
import CardDetails from "./pages/CardDetails";
import EditCard from "./pages/EditCard";
import EditUser from "./pages/EditUser";
import { getUser } from "./auth/TokenManager";
import Profile from "./pages/Profile";
import { PaletteMode } from "@mui/material";
import { amber, blue, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import RouteGuard from "./auth/RouteGuard";

export interface UserContext {
  userName: string;
  setUserName: Function;
  admin: boolean
  setAdmin: Function
  user:any
  setUser: Function
  business: string
  setBusiness: Function
}

export const AppContext = createContext<UserContext | null>(null);

const userData = getUser()

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: blue,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
           background: {
            default: blue[100],
            paper: deepOrange[900],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: deepOrange[700],
          background: {
            default: grey[800],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});


function App() {
  // const [mode, setMode] = useState<"light" | "dark">("light");
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [userName, setUserName] = useState(
    userData ? userData.firstName : 'user'
  );
  const [business, setBusiness] = useState(userData?userData.business: false)
  const [admin, setAdmin] = useState(userData? userData.admin: false);
  const [user, setUser] = useState();

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  function handleModeClick() {
    const toggleMode = mode === "dark" ? "light" : "dark";
    setMode(toggleMode);
  }

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContext.Provider value={{ userName, setUserName, admin, setAdmin, user, setUser, business, setBusiness }}>
         
          <div  className="app">
            <Navbar />

            <div className="modeWrap">
              <label htmlFor="">MODE:</label>
              <button className="btn btn-primary ms-3" onClick={handleModeClick}>
                {theme.palette.mode === "dark" ? (
                  <i className="bi bi-sun" />
                ) : (
                  <i className="bi bi-moon" />
                )}
              </button>
            </div>

            <ToastContainer position="top-right" theme="dark" />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="mycards" element={<MyCards />} />
              <Route path="sandbox" element={<Sandbox />} />
              <Route path="signup" element={<Signup />} />
              <Route path='login'  element={<Login />} />
              <Route path="addCard" element={<AddCard />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route path="details/:id" element={
              <RouteGuard>
              <CardDetails />
              </RouteGuard>
              } />
              <Route path="editcard/:id" element={<EditCard />} />
              <Route path="edituser/:id" element={<EditUser />} />
            </Routes>
            <Footer/>
          </div>
        </AppContext.Provider>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
