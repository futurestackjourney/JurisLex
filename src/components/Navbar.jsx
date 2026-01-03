import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-5 z-30 bg-transparent padding-x-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="">
           <Link to="/">
            <img src="../images/logo.png" width="80" height="80" alt="" />
           </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
            <Link to="/help" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              How we Help
            </Link>
            <Link to="/About" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              About
            </Link>
            <Link to="/contact" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              Contact
            </Link>
           <button className="btn-nav">
            Call Us
           </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/70 border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <Link to="/about" className="text-gray-700 hover:text-black">
              How we Help
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
