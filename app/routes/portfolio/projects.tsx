import type { Route } from "../portfolio/+types/projects";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { MDBlock, H1 } from "../../components/markdownhelper";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "projects" },
    { name: "description", content: "what i have done!" },
  ];
}

const pickRepos = [
  { owner: "JocimSus", repo: "dotfiles-nix" },
  { owner: "JocimSus", repo: "orrery-submission" },
  { owner: "JocimSus", repo: "access-db" },
  { owner: "JocimSus", repo: "password-manager" },
  { owner: "JocimSus", repo: "cpp-notepad-imgui" },
  { owner: "JocimSus", repo: "snakegame-reinforcement-learning" },
  { owner: "JocimSus", repo: "full-stack-messenger-clone" },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const octokit = new Octokit();
    
    const fetchRepos = async () => {
      try {
        const { data } = await octokit.repos.listForUser({
          username: "JocimSus",
          per_page: 100,
        });

        const selectedRepos = new Set(pickRepos.map(r => r.repo));
        
        const filtered = data
          .filter(repo => selectedRepos.has(repo.name))
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
          }));

        setRepos(filtered);
      } catch (error) {
        console.error("Failed to fetch repos: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="ml-7 mt-7 mb-7 lg:mt-0 lg:ml-[230px] mr-20 pl-7 pt-11">
      <MDBlock>
        <H1>my projects</H1>
        These repos below are my projects that I have built
      </MDBlock>

      {loading ? (
        <p className="mt-4">Loading repos</p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="border rounded p-4 hover:shadow-md transition"
            >
              <a
                href={repo.html_url}
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="mt-2 text-sm">{repo.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
