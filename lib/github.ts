import { githubUser } from "./data";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

export type GithubProfile = {
  public_repos: number;
  followers: number;
  following: number;
};

const headers = { Accept: "application/vnd.github+json" };

export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=30`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: Repo[] = await res.json();
    return data.filter((repo) => !repo.fork).slice(0, 9);
  } catch {
    return [];
  }
}

export async function getGithubProfile(): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${githubUser}`, { headers, next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
