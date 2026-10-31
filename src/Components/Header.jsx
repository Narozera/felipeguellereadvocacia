import { useState } from "react";
import { menu } from "../Constants";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className="w-full bg-navy sticky top-0 z-30 border-b border-white/10 font-times"
      id="nav"
    >
      <div className="container mx-auto px-6 flex items-center justify-between sm:flex-wrap md:flex-wrap">
        <a className="py-4" href="#hero">
          <img className="w-64 sm:w-48 md:w-52" src="/logo.png" alt="Felipe Guellere Advocacia" />
        </a>

        <button
          className="hidden sm:block md:block p-2 text-white"
          onClick={() => setNavbar(!navbar)}
          aria-label="Abrir menu"
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
              className="w-6 h-6"
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

        <ul
          className={`flex items-center gap-8 font-bold text-[18px] sm:w-full md:w-full sm:flex-col md:flex-col sm:items-start md:items-start sm:gap-5 md:gap-5 sm:pb-6 md:pb-6 ${
            navbar ? "" : "sm:hidden md:hidden"
          }`}
        >
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setNavbar(false)}
                className="text-white hover:text-[#c9d6df] ease-linear transition-all duration-150"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
