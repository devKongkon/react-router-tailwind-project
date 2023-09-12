import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="md:hidden">
            <Link to="/" className="cursor-pointer flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="logo"
                className="h-12 mr-3"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((pre) => !pre)}
              className="text-2xl font-bold"
            >
              {
                isMobileMenuOpen ? (<RiCloseLine />) : (<RiMenu3Fill />)
              }
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute right-0 flex-col top-[70px] w-full mx-auto text-center sidebar bg-purple-50`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold sidebar`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 font-semibold lg:p-0 sidebar`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 font-semibold lg:p-0 sidebar`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 font-semibold lg:p-0 sidebar`
              }
            >
              Github
            </NavLink>
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg  px-4 lg:px-5 py-2 lg-py-2.5 mr-2 focus:outline-none font-semibold sidebar text-md"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  sidebar font-semibold"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden md:block w-full mx-auto" id="mobile-menu-2"
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="cursor-pointer flex items-center">
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt="logo"
                  className="h-12 mr-3"
                />
              </Link>
              <ul className="flex font-medium space-x-8 items-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-700" : "text-gray-700"} block py-2 pr-4 pl-3 duration-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <Link
                  to="#"
                  className="text-white bg-orange-700 hover:bg-orange-600 text-sm font-bold  focus:outline-none my-auto py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Get started
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
