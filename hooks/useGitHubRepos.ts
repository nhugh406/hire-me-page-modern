import { useEffect, useState } from "react";
import { GITHUB_USERNAME, SELECTED_REPOS } from "@/constants/data";

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  updated_at: string;
};

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gh = params.get("gh");
    const reposParam = params.get("repos");
    const username = gh || GITHUB_USERNAME;
    const list = reposParam
      ? reposParam
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : SELECTED_REPOS;

    const apiUrl = `/api/github-selected?username=${username}&repos=${list.join(
      ","
    )}`;
    fetch(apiUrl)
      .then((r) => r.json())
      .then(async (d) => {
        if (Array.isArray(d?.repos) && d.repos.length > 0) {
          setRepos(d.repos);
          setLoading(false);
          return;
        }
        // Fallback: fetch each repo client-side directly from GitHub
        const results: any[] = [];
        for (const name of list) {
          try {
            const res = await fetch(
              `https://api.github.com/repos/${username}/${name}`,
              { headers: { "User-Agent": "hire-me-page" } }
            );
            if (!res.ok) continue;
            const r = await res.json();
            results.push({
              name: r.name,
              url: r.html_url,
              description: r.description,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              updated_at: r.updated_at,
            });
          } catch {}
        }
        setRepos(results);
        setLoading(false);
      })
      .catch(async () => {
        // If the route itself failed, try the direct client fetch path
        const list = SELECTED_REPOS;
        const results: any[] = [];
        for (const name of list) {
          try {
            const res = await fetch(
              `https://api.github.com/repos/${gh || GITHUB_USERNAME}/${name}`,
              { headers: { "User-Agent": "hire-me-page" } }
            );
            if (!res.ok) continue;
            const r = await res.json();
            results.push({
              name: r.name,
              url: r.html_url,
              description: r.description,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              updated_at: r.updated_at,
            });
          } catch {}
        }
        setRepos(results);
        setLoading(false);
      });
  }, []);

  return { repos, loading };
};
