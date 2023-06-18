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

export interface UserContext {
  userName: string;
  setUserName: Function;
}

export const AppContext = createContext<UserContext | null>(null);

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [userName, setUserName] = useState("");

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
        <AppContext.Provider value={{ userName, setUserName }}>
         
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
            </Routes>
          </div>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
