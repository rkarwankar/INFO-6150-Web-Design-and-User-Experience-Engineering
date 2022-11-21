import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
