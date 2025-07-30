import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { label: "portfolio", 
    to: "/portfolio" ,
    children: [
      { label: "server", to: "/portfolio/server" },
    ],
  },
  { label: "about", to: "/about"},
];

const socials = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/joachim-susatiyo-049339292/", icon: faLinkedin },
  { name: "GitHub", link: "https://github.com/JocimSus", icon: faSquareGithub }
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 h-screen w-[220px] bg-linear-to-br from-orange-700 to-red-500 pt-10 pl-7 pr-10 font-mono">
      <div className="flex flex-col h-full">
        <Link to="/" className="flex flex-col items-center mb-3">
          <img src="https://mad.s-ul.eu/63pecYaC.gif" />
          <div className="font-bold">the box</div>
        </Link>
        <div className="flex flex-col h-full">
          <nav>
            <ul className="leading-6">
              {navLinks.map((item) => (
                <li>
                  <Link
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <ul className="ml-6">
                      {item.children.map((child) => (
                        <li>
                          <Link
                            key={child.to}
                            to={child.to}
                          >
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
          <div className="mt-auto mb-11">
            <div className="flex flex-row">
              <ul className="flex flex-row">
                {socials.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-[25px]"/>
                  </Link> 
                ))} 
              </ul>
            </div>
            <div className="text-xs">© jocimsus, 2025</div>
          </div>
        </div>
      </div>
    </header>
  );
}
