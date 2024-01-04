import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Bottombar from "./components/Bottombar/Bottombar";

function App() {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      <Blog />
      <Footer />
      <Bottombar />
    </div>
  );
}

export default App;
