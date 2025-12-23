import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import AuthModal from "../../auth/AuthModal/AuthModal";
import axiosPublic from "../../api/axiosPublic";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";

const getEmailFromToken = () => {
  const token = localStorage.getItem("access-token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.email;
  } catch {
    return null;
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access-token")
  );
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const email = getEmailFromToken();
    if (!email) {
      return;
    }

    axiosPublic
      .get(`/users?email=${email}`)
      .then((res) => {
        const user = res?.data?.data?.data?.[0];
        setIsLoggedIn(true);
        setUserRole(user.role);
      })
      .catch(() => {
        localStorage.removeItem("access-token");
        setIsLoggedIn(false);
        setUserRole(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    setIsLoggedIn(false);
    setUserRole(null);
    toast.warning("You have successfully logged out!");
  };

  return (
    <div className="fixed w-screen top-0 left-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled ? "backdrop-blur bg-white/60 shadow-md" : "bg-transparent"
        }`}
      ></div>

      <header className="relative">
        <nav className="py-4">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-8" />
                <h1 className="text-2xl font-extrabold text-gray-800 rubik-font">
                  Fresh Harvests
                </h1>
              </div>
            </Link>

            <ul className="hidden md:flex items-center gap-12 text-gray-600 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-green-600 pb-1 ${
                    isActive ? "border-b-2 border-green-600 text-green-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `hover:text-green-600 pb-1 ${
                    isActive ? "border-b-2 border-green-600 text-green-600" : ""
                  }`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-green-600 pb-1 ${
                    isActive ? "border-b-2 border-green-600 text-green-600" : ""
                  }`
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `hover:text-green-600 pb-1 ${
                    isActive ? "border-b-2 border-green-600 text-green-600" : ""
                  }`
                }
              >
                Blog
              </NavLink>
            </ul>

            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2 cursor-pointer">
                <IoMdHeart /> Favorites
              </span>

              <Link
                to={"/cart"}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <FaCartArrowDown />
                <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartCount}
                </span>
                Cart
              </Link>

              {isLoggedIn && userRole === "ADMIN" && (
                <NavLink
                  to="/dashboard/product-added"
                  className="px-4 py-2 rounded-md bg-green-600 text-white font-bold rubik-font"
                >
                  Admin
                </NavLink>
              )}

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-md font-bold bg-red-600 text-white rubik-font cursor-pointer"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className="border px-5 py-2 rounded-md font-bold rubik-font cursor-pointer"
                >
                  Sign in
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center gap-4">
              <Link
                to={"/cart"}
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <FaCartArrowDown />
                <span className="absolute -top-2 left-3 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartCount}
                </span>
                Cart
              </Link>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <TiThMenu className="text-2xl" />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden fixed top-18 left-0 right-0 z-50 bg-white shadow-lg rounded-b-xl mx-4 py-6 px-4 space-y-4">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium pl-3 ${
                    isActive
                      ? "border-l-4 border-green-600 text-green-600 bg-green-50"
                      : "border-l-4 border-transparent"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium pl-3 ${
                    isActive
                      ? "border-l-4 border-green-600 text-green-600 bg-green-50"
                      : "border-l-4 border-transparent"
                  }`
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium pl-3 ${
                    isActive
                      ? "border-l-4 border-green-600 text-green-600 bg-green-50"
                      : "border-l-4 border-transparent"
                  }`
                }
              >
                About us
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium pl-3 ${
                    isActive
                      ? "border-l-4 border-green-600 text-green-600 bg-green-50"
                      : "border-l-4 border-transparent"
                  }`
                }
              >
                Blog
              </NavLink>

              {isLoggedIn && userRole === "ADMIN" && (
                <NavLink
                  to="/dashboard/product-added"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-bold text-green-600 rubik-font"
                >
                  Admin
                </NavLink>
              )}

              <hr className="my-4" />

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full border border-red-400 text-red-600 py-2 rounded-md font-bold rubik-font"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full border border-gray-400 py-2 rounded-md font-bold rubik-font"
                >
                  Sign in
                </button>
              )}
            </div>
          )}
        </nav>
      </header>

      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
        setLoading={setLoading}
        setUserRole={setUserRole}
      />
    </div>
  );
};

export default Navbar;
