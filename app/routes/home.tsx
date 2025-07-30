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
    ],
  },
  {
    type: "frameworks",
    items: [
      { name: "tailwind-css", icon: "/icons/tailwind-css.svg" },
      { name: "next-js", icon: "/icons/next-js.svg" },
      { name: "vite-js", icon: "/icons/vitejs.svg" },
      { name: "react-router", icon: "/icons/react-router.svg" },
    ],
  },
   {
    type: "libraries",
    items: [
      { name: "react", icon: "/icons/react.svg" },
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
    <main className="ml-[230px] mr-10 pl-7 pt-11">
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
        <div className="text-center text-sm">
          {techStack.map((section, i) => (
            <table key={i} className="w-full table-fixed mb-5">
              <thead>
                <tr>
                  <th
                    colSpan={section.items.length}
                    className="bg-night-dark2 py-3 text-lg tracking-wide"
                  >
                    {section.type}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {section.items.map((item, j) => (
                    <td key={j} className="py-4 align-top">
                      <div className="flex justify-center">
                        <img src={item.icon} className="w-[77px]"/>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {section.items.map((item, j) => (
                    <td key={j} className="pb-4 text-sm align-top">
                      <div className="flex justify-center">
                        {item.name}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </MDBlock>
    </main>
  );
}
