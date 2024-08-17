import React from 'react';
import { Link } from 'react-router-dom'; // For smooth scrolling to sections

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md">
      <nav className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          Techy Software
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              smooth="true"
              duration={500}
              offset={-70}
              className="hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              smooth="true"
              duration={500}
              offset={-70}
              className="hover:text-yellow-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="products"
             smooth="true"
              duration={500}
              offset={-70}
              className="hover:text-yellow-500"
            >
              Products/Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
             smooth="true"
              duration={500}
              offset={-70}
              className="hover:text-yellow-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              smooth="true"
              duration={500}
              offset={-70}
              className="hover:text-yellow-500"
            >
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
