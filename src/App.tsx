import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import Cookies from "./components/Cookies/Cookies";
import Footer from "./components/Footer/Footer";
import Bottombar from "./components/Bottombar/Bottombar";

function App() {
  return (
    <div className="bg-[#fafafa]">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
