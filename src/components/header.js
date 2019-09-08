import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-2">
        <Link
          to="/"
          id="logo"
          className="flex items-center no-underline"
        >
          <span className="font-bold text-xl tracking-tight hidden">{siteTitle}</span>
          <img
            className="h-8"
            src={'/images/statically_wide.svg'}
          />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/features"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Features
            </Link>

            <Link
              to="/docs"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Docs
            </Link>

            <Link
              to="/support-statically"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Support us!
            </Link>

            <Link
              to="/sponsors"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Sponsors
            </Link>

            <Link
              to="/network"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Network
            </Link>

            <Link
              to="/blog"
              className="block md:inline-block mt-4 md:mt-0 mr-6 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 font-semibold text-gray-800 hover:text-red-500 focus:text-red-500"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
