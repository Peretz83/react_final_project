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

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [userName, setUserName] = useState(
    userData ? userData.firstName : 'user'
  );
  const [business, setBusiness] = useState(userData?userData.business: false)
  const [admin, setAdmin] = useState(userData? userData.admin: false);
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
        <AppContext.Provider value={{ userName, setUserName, admin, setAdmin, user, setUser, business, setBusiness }}>
         
          <div className="app">
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
              <Route path="login" element={<Login />} />
              <Route path="addCard" element={<AddCard />} />
              <Route path="details/:id" element={<CardDetails />} />
              <Route path="editcard/:id" element={<EditCard />} />
              <Route path="edituser/:id" element={<EditUser />} />
            </Routes>
            <Footer/>
          </div>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
