import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { MDBlock, H1 } from "../../components/markdownhelper";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
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
    Promise.all(
      pickRepos.map(({ owner, repo }) =>
        octokit.repos.get({ owner, repo }).then(r => r.data)
      )
    )
      .then((datas) => {
        const formatted: Repo[] = datas.map((d) => ({
          id: d.id,
          name: d.name,
          html_url: d.html_url,
          description: d.description,
        }));
        setRepos(formatted);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="ml-[230px] mr-20 pl-7 pt-11">
      <MDBlock>
        <H1>my projects</H1>
        These repos below are my projects that I have built
      </MDBlock>

      {loading ? (
        <p className="mt-4">Loading selected repos…</p>
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
                rel="noopener noreferrer"
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
