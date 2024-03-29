import { useState } from "react";
import { menu } from "../Constants";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className="w-full bg-[#00293F] sticky z-10 sm:max-w-[320px] md:max-w-[100%] px-[150px] lg:px-[10px] sm:px-[10px] md:px-[10px]"
      id="nav"
    >
      <div className="justify-between px-4 lg:flex lg:items-center lg:px-8 xl:items-center xl:flex xl:px-8 2xl:items-center 2xl:flex 2xl:px-8">
        <div className="flex items-center justify-between">
          <a href="#footer">
            <img src="/logo.svg" alt="Logo" />
          </a>
          <div className="lg:hidden xl:hidden 2xl:hidden">
            <button
              className="p-2 text-gray-700 rounded-2xl outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-end pb-3 mt-8 lg:block xl:block xl:pb-0 xl:mt-0 2xl:block 2xl:pb-0 2xl:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 xl:flex xl:space-x-6 xl:space-y-0 2xl:flex 2xl:space-x-6 2xl:space-y-0 font-bold text-[20px] font-roboto">
              {menu.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:text-indigo-200 ease-linear transition-all duration-150"
                >
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
