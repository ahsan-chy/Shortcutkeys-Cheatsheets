import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Features from "./pages/Features";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
   
    
    <Footer/>
    </Router>
  );
}

export default App;
