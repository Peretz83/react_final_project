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

export interface UserContext {
  userName: string;
  setUserName: Function;
  admin: boolean
  setAdmin: Function
  user:any
  setUser: Function
}

export const AppContext = createContext<UserContext | null>(null);

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [userName, setUserName] = useState("");
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  function handleModeClick() {
    const toggleMode = mode === "dark" ? "light" : "dark";
    setMode(toggleMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContext.Provider value={{ userName, setUserName, admin, setAdmin, user, setUser }}>
         
          <div className="app">
            <Navbar />

            <div className="modeWrap">
              <label htmlFor="">Mode:</label>
              <button className="btn btn-light ms-3" onClick={handleModeClick}>
                {theme.palette.mode === "dark" ? (
                  <i className="bi bi-sun" />
                ) : (
                  <i className="bi bi-moon" />
                )}
              </button>
            </div>
            <ToastContainer position="bottom-right" theme="dark" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="mycards" element={<MyCards />} />
              <Route path="sandbox" element={<Sandbox />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="addCard" element={<AddCard />} />
              <Route path="details/:id" element={<CardDetails />} />
            </Routes>
            <Footer/>
          </div>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
