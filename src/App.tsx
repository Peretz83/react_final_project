import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MyCards from "./pages/MyCards";
import Sandbox from "./pages/Sandbox";
import Signup from "./auth/Signup";
import Login from "./auth/Login";


function App() {
  return (
    <div className="App">
     
      <Navbar/>
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
  );
}

export default App;
