import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import ElevatorPitch from "./pages/ElevatorPitch";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/elevator-pitch" element={<ElevatorPitch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
