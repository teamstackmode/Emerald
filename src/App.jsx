import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {/* ALL pages go inside Routes */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
};

export default App;
