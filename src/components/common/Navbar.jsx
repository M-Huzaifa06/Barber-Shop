import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, UserRound, X } from "lucide-react";
import Button from "./Button";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Branches", path: "/branches" },
  { name: "About", path: "/about" },
  { name: "Our Barbers", path: "/barbers" },
  { name: "Services", path: "/services/all" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        !isHomePage || scrolled || isOpen
          ? "bg-black/95 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur"
          : "bg-linear-to-b from-black/85 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Berger Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition ${
                  isActive ? "text-gold-500" : "text-white hover:text-gold-500"
                }`
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex ">
          <Button
            as={Link}
            to="/booking"
            size="sm"
            className="group relative px-6 py-3 
             bg-transparent text-gold-500 font-bold 
             rounded-full overflow-hidden 
             transition-all duration-500 
             uppercase tracking-wider text-sm 
             border border-gold-500 isolate"
          >
            {/* Animated Background */}
            <span
              className="absolute inset-0 
               bg-linear-to-r from-[#D4AF37] to-[#F4D03F] 
               -translate-y-full 
               group-hover:translate-y-0 
               transition-transform duration-500 ease-out
               z-0"
            />

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Book Now
            </span>
          </Button>
          <Button
            as={Link}
            to="/login"
            size="sm"
            className="group relative px-6 py-3 
             bg-transparent text-white font-bold 
             rounded-full overflow-hidden 
             transition-all duration-500 
             uppercase tracking-wider text-sm 
             border border-white/20 isolate"
          >
            {/* Animated Background */}
            <span
              className="absolute inset-0 
               bg-linear-to-r from-[#D4AF37] to-[#F4D03F] 
               translate-y-full 
               group-hover:translate-y-0 
               transition-transform duration-500 ease-out
               z-0"
            />

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center gap-2">
              <UserRound size={16} />
              Login
            </span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex size-11 items-center justify-center border border-white/15 text-white transition hover:border-gold-500 hover:text-gold-500 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`grid transition-all duration-300 lg:hidden ${
          isOpen
            ? "grid-rows-[1fr] border-t border-white/10"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden bg-black/95">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 font-heading text-sm font-bold uppercase tracking-wide transition ${
                    isActive
                      ? "bg-gold-500 text-black"
                      : "text-white hover:bg-white/5 hover:text-gold-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-3 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
              <Button
                className="rounded-full"
                as={Link}
                to="/booking"
                onClick={() => setIsOpen(false)}
                fullWidth
              >
                Book Now
              </Button>
              <Button
                className="rounded-full"
                as={Link}
                to="/login"
                onClick={() => setIsOpen(false)}
                variant="outline"
                fullWidth
              >
                Login
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
