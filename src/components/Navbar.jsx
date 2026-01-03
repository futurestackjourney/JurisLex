import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-5 z-30 bg-transparent padding-x-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="">
           <a href="/">
            <img src="../images/logo.png" width="80" height="80" alt="" />
           </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
            <a href="/help" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              How we Help
            </a>
            <a href="/About" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              About
            </a>
            <a href="/contact" className="text-zinc-200 tracking-wide hover:text-white transition nav-link">
              Contact
            </a>
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
        <div className="md:hidden border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
