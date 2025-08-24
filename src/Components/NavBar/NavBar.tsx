import { useEffect, useRef, useState } from "react";
import { FaFileAlt, FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  // Provide a proper HTML element type for the ref
  const navRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll shadow / style
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 0);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close when clicking on a NavLink
  const handleNavigate = (): void => setToggled(false);

  // Close when clicking outside the menu (only when menu is open)
  useEffect(() => {
    const onClickOutside = (e: MouseEvent): void => {
      // If the ref is attached and the click target is outside the nav, close
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setToggled(false);
      }
    };

    if (toggled) {
      // Use plain event listener with proper typing
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [toggled]);

  const links = [
    {
      label: "Home",
      icon: <FaHome className="w-7 h-7 text-[var(--light-color)]" />,
      path: "home",
    },
    {
      label: "About",
      icon: <IoMdPerson className="w-7 h-7 text-[var(--light-color)]" />,
      path: "about",
    },
    {
      label: "Projects",
      icon: <GrProjects className="w-7 h-7 text-[var(--light-color)]" />,
      path: "projects",
    },
    {
      label: "Resume",
      icon: <FaFileAlt className="w-7 h-7 text-[var(--light-color)]" />,
      path: "resume",
    },
  ];

  return (
    <header aria-label="Main navigation">
      <nav
        ref={navRef}
        className={`font-semibold text-[18px] navbar ${scrolled ? "scrolled" : ""}`}
        aria-label="Site navigation"
      >
        <div className="flex flex-wrap items-center justify-between py-4 w-[85%] mx-auto">
          <div className="flex items-center gap-2">
            <h1
              className="text-4xl font-bold text-shadow-lg text-shadow-teal-800 text-[var(--light-color)]"
              aria-label="Site logo"
            >
              HS.
            </h1>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            onClick={() => setToggled((t) => !t)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center bg-[var(--primary-color)] text-sm text-[var(--light-color)] rounded-lg md:hidden hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={toggled}
            aria-label={toggled ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div id="navbar-default" className={`${toggled ? "block" : "hidden"}  w-full md:block md:w-auto`}>
            <ul className="flex flex-col md:flex-row gap-10 bg-[var(--primary-color)] md:bg-transparent p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg md:rounded-none md:overflow-visible md:shadow-none lg:gap-15 font-semibold text-white">
              {links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-3"
                    aria-label={`${link.label} section`}
                    title={link.label}
                    onClick={handleNavigate} // Close on navigation
                  >
                    {link.icon} {link.label}
                    <span className="sr-only">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;