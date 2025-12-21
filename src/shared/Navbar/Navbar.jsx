import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import AuthModal from "../../auth/AuthModal/AuthModal";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-screen top-0 left-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled ? "backdrop-blur bg-white/50 shadow-md" : "bg-transparent"
        }`}
      ></div>

      <header className="relative">
        <nav className="py-4">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-8" />
              <h1 className="text-xl font-extrabold text-gray-800">
                Fresh Harvests
              </h1>
            </div>

            <ul className="hidden md:flex items-center gap-12 text-gray-600 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative cursor-pointer ${
                    isActive
                      ? "text-green-600 font-semibold"
                      : "hover:text-green-600"
                  }`
                }
              >
                Home
                <span className="absolute left-1/2 -bottom-2 w-4 h-1 bg-green-600 rounded-full -translate-x-1/2"></span>
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold cursor-pointer"
                    : "hover:text-green-600 cursor-pointer"
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold cursor-pointer"
                    : "hover:text-green-600 cursor-pointer"
                }
              >
                About us
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold cursor-pointer"
                    : "hover:text-green-600 cursor-pointer"
                }
              >
                Blog
              </NavLink>
            </ul>

            <div className="hidden md:flex items-center gap-6 text-gray-700">
              <span className="flex items-center gap-2 cursor-pointer">
                <IoMdHeart /> Favorites
              </span>

              <div
                className="flex items-center gap-3 cursor-pointer relative text-gray-900"
              >
                <FaCartArrowDown />
                <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs px-1 rounded-full">
                  3
                </span>
                Cart
              </div>

              <button onClick={() => setModalOpen(true)}
                className="border px-5 py-2 rounded-md font-bold rubik-font text-gray-900 cursor-pointer" 
              >
                Sign in
              </button>
               <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>

            <div className="md:hidden flex items-center gap-4">
              <div className="relative cursor-pointer text-xl">
                <FaCartArrowDown
                  className="text-gray-800"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  3
                </span>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-800"
              >
                <TiThMenu
                  className="text-gray-800 cursor-pointer"
                />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg mx-4 p-5 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold block"
                    : "hover:text-green-600 block"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold block"
                    : "hover:text-green-600 block"
                }
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold block"
                    : "hover:text-green-600 block"
                }
                onClick={() => setMenuOpen(false)}
              >
                About us
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-semibold block"
                    : "hover:text-green-600 block"
                }
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </NavLink>

              <hr className="text-gray-300" />

              <div className="flex items-center gap-2">
                <IoMdHeart /> Favorites
              </div>

              <button onClick={() => setModalOpen(true)} className="w-full border border-gray-300 py-2 rounded-md font-bold cursor-pointer">
                Sign in
              </button>
              <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
