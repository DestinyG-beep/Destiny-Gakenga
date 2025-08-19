import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Destiny Mburugu Gakenga</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/bio" className="hover:text-blue-600">Bio</Link>
        <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
        <Link to="/elevator" className="hover:text-blue-600">Elevator Pitch</Link>
      </div>
    </nav>
  );
}

export default Navbar;
