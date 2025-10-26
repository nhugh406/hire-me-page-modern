import { NextRequest, NextResponse } from "next/server";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const reposParam = searchParams.get("repos"); // comma-separated list
  if (!username || !reposParam) {
    return NextResponse.json(
      { error: "Missing username or repos" },
      { status: 400 }
    );
  }

  const names = reposParam
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const results: any[] = [];
  const failed: string[] = [];

  for (const name of names) {
    const url = `https://api.github.com/repos/${username}/${name}`;
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "hire-me-page",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      });

      if (!res.ok) {
        if (res.status === 404) {
          failed.push(`${username}/${name} (not found)`);
        } else {
          failed.push(`${username}/${name} (${res.status})`);
        }
        console.error(
          `Failed to fetch ${url}: ${res.status} ${res.statusText}`
        );
        continue;
      }

      const r: Repo = await res.json();
      results.push({
        name: r.name,
        url: r.html_url,
        description: r.description,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        updated_at: r.updated_at,
      });
    } catch (error) {
      failed.push(
        `${username}/${name} (error: ${
          error instanceof Error ? error.message : "unknown"
        })`
      );
      console.error(`Error fetching ${url}:`, error);
    }
  }

  const response: any = { repos: results };
  if (failed.length > 0) {
    response.failed = failed;
    console.warn("Failed repositories:", failed);
  }

  return NextResponse.json(response);
}
