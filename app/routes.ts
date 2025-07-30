import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route("portfolio/server", "./routes/portfolio/server.tsx"),
  route("portfolio/projects", "./routes/portfolio/projects.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
