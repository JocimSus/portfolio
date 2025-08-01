import type { Route } from "./+types/home";
import { MDBlock, H1 } from "../components/markdownhelper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "about me" },
    { name: "description", content: "what i do!" },
  ];
}

const techStack = [
  {
    type: "languages",
    items: [
      { name: "python", icon: "/icons/python.svg" },
      { name: "html", icon: "/icons/html.svg" },
      { name: "css", icon: "/icons/css.svg" },
      { name: "javascript", icon: "/icons/javascript.svg" },
      { name: "typescript", icon: "/icons/typescript.svg" },
      { name: "nix", icon: "/icons/nix.svg" },
      { name: "rust", icon: "/icons/rust.svg" },
      { name: "c++", icon: "/icons/cpp.svg" },
    ],
  },
  {
    type: "frameworks",
    items: [
      { name: "tailwind-css", icon: "/icons/tailwind-css.svg" },
      { name: "next-js", icon: "/icons/next-js.svg" },
      { name: "vite-js", icon: "/icons/vitejs.svg" },
      { name: "react-router", icon: "/icons/react-router.svg" },
      { name: "pytorch", icon: "/icons/pytorch.svg" },
    ],
  },
   {
    type: "libraries",
    items: [
      { name: "react", icon: "/icons/react.svg" },
      { name: "threejs", icon: "/icons/threejs.svg" },
      { name: "pygame", icon: "/icons/pygame.svg" },
    ],
  }, {
    type: "databases",
    items: [
      { name: "mysql", icon: "/icons/mysql.svg" },
      { name: "postgresql", icon: "/icons/postgresql.svg" },
      { name: "sqlite", icon: "/icons/sqlite.svg" },
      { name: "mongodb", icon: "/icons/mongodb.svg" },
    ],
  },
];

export default function Home() {
  return (
    <main className="ml-7 mt-7 mb-7 lg:mt-0 lg:ml-[230px] mr-20 pl-7 pt-11">
      <MDBlock>
        <H1>about me!</H1>
        <div className="whitespace-pre-wrap mb-7">
          Hello! I'm Joachim, an 18 year old from Ind*nesia, i like computers and onomatopoeias. <br/>
          I'm into selfhosting, sysadmin, and reading non-academic literature. <br/>
          <br/>
          I'm currently a student at the University of Indonesia studying Computer Science. <br/>
          I've been trying to learn more about networking and selfhosting by making a website and selfhosting it on my NixOS server.
        </div>
        <H1>my techstack</H1>
        <div className="space-y-8 mt-4">
          {techStack.map((section) => (
            <div key={section.type} className="bg-night-dark2 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-center mb-4 uppercase tracking-wide">
                {section.type}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center space-y-2"
                  >
                    <img src={item.icon} className="w-16 h-16" />
                    <span className="text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MDBlock>
    </main>
  );
}
