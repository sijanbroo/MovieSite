import React from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600 ml-4">SijanBro.</h1>

        <ul className="hidden md:flex gap-12 text-gray-700 font-semibold text-lg">
          <li className="hover:text-indigo-600 cursor-pointer ">
            <NavLink to="/">
              <AiOutlineHome className="inline mb-1 mr-1" />
              Home
            </NavLink>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer">
            <NavLink to="/favourite">
              <GrFavorite className="inline mb-1 mr-1" />
              Favourite
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden" onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <AiOutlineClose
              size={28}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            />
          )}
        </div>
        <div
          className={`fixed z-999 w-[50%] left-0 top-0 h-full border-r border-r-gray-200 bg-white p-4 pt-12 transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-2xl font-bold text-indigo-600 mb-12">
            SijanBro.
          </h1>
          <ul className="flex flex-col justify-center items-center gap-6 font-semibold text-gray-700 text-lg ">
            <li className="hover:text-indigo-600 cursor-pointer ">
              <NavLink to="/">
                <AiOutlineHome className="inline mb-1 mr-1" />
                Home
              </NavLink>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
              <NavLink to="/favourite">
                <GrFavorite className="inline mb-1 mr-1" />
                Favourite
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
