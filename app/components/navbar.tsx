import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { label: "portfolio", 
    to: "/portfolio" ,
    children: [
      { label: "server", to: "/portfolio/server" },
      { label: "projects", to: "/portfolio/projects" }
    ],
  },
  { label: "contact", to: "/contact"},
];

const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/joachim-susatiyo-049339292/", icon: faLinkedin },
  { name: "GitHub", link: "https://github.com/JocimSus", icon: faSquareGithub }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const MenuContent = (
    <div className="flex flex-col h-full text-white px-6 pt-10">
      <Link to="/" className="flex flex-col items-center mb-6">
        <img
          src="https://mad.s-ul.eu/63pecYaC.gif"
          loading="lazy"
        />
        <span className="font-bold text-sm mt-2">the box</span>
      </Link>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navLinks.map((item) => (
            <li key={item.to}>
              {item.children ? (
                <div className="space-x-1.5">
                  <span>{item.label}</span>
                  <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
                </div>
              ) : (
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              )}
              {item.children && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link to={child.to} className="hover:underline">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto mb-20 lg:mb-4">
        <ul className="flex">
          {socials.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                target="_blank"
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </a>
            </li>
          ))}
        </ul>
        <div className="text-xs mt-3">
          <FontAwesomeIcon icon={faCopyright} className="text-xs" />{" "}
          jocimsus, 2025
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden flex items-center justify-between bg-night-dark3 p-4 fixed top-0 left-0 right-0 z-20">
        <button onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
        </button>
        <Link to="/">
          <img
            src="https://mad.s-ul.eu/63pecYaC.gif"
            alt="logo"
            className="w-16 h-16"
          />
        </Link>
      </div>
      <div
        className={`
          fixed top-0 left-0 h-full w-63 bg-night-dark3 z-31
          transform transition-transform duration-302 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:hidden
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl text-white" />
          </button>
        </div>
        {MenuContent}
      </div>

      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-57 bg-night-dark3">
        {MenuContent}
      </aside>

      <div className="lg:ml-57 pt-13 lg:pt-0" />
  </>
  );
}
