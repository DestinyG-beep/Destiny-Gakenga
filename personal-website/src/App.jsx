import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import ElevatorPitch from "./pages/ElevatorPitch";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/elevator" element={<ElevatorPitch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
