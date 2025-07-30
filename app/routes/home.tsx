import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "jocimsus" },
    { name: "description", content: "what i do!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
