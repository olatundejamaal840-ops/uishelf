import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Elements from "./pages/Elements";
import Challenges from "./pages/Challenges";
import Blog from "./pages/Blog";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
