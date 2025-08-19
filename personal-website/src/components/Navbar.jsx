import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "text-white bg-blue-600 shadow-md"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-gray-900 font-bold text-xl">
            Destiny Gakenga
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/bio" className={linkClasses}>Bio</NavLink>
            <NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink>
            <NavLink to="/elevator-pitch" className={linkClasses}>Elevator Pitch</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/bio" className={linkClasses} onClick={() => setOpen(false)}>Bio</NavLink>
            <NavLink to="/portfolio" className={linkClasses} onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink to="/elevator-pitch" className={linkClasses} onClick={() => setOpen(false)}>Elevator Pitch</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
