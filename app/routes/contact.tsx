import type { Route } from "./+types/contact";
import { MDBlock, H1 } from "../components/markdownhelper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "contact me" },
    { name: "description", content: "my contact info" },
  ];
}

export default function About() {
  return (
    <div className="ml-7 mt-7 mb-7 lg:mt-0 lg:ml-[230px] mr-20 pl-7 pt-11">
      <MDBlock>
        <H1>contact me</H1>
        hello heres a cat and my contact info: <br/>
        joachim.susatiyo[at]ui.ac.id
        <img src="/images/cat.webp" className="mt-3"/>
      </MDBlock>
    </div>
  );
}
