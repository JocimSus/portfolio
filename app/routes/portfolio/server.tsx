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
];

export default function Server() {
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
        <H1>the server</H1>
        I love my home server. i use it to host websites that i use everyday, those being my <a href="https://books.224668.xyz" className="underline">book library</a>, 
        my <a href="https://vault.224668.xyz" className="underline">bitwarden vault</a>, my cloud (which is currently in progress), 
        my <a href="https://note.224668.xyz" className="underline">note taking site</a>, and my <a href="https://zip.224668.xyz" className="underline">image hosting site</a>. <br/>
        <br/>
        All of it is hosted on this <a href="https://github.com/JocimSus/dotfiles-nix" className="underline">github repo</a> (jocimsus-server)! <br/>
        This github repo also features github <b>CI/CD</b> to build my nix flakes for my personal laptop and also my server :)

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
      </MDBlock>
    </div>
  );
}
