export async function fetchStats() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const githubRepoRes = await fetch(`${baseUrl}/githubrepo/stats`);
    const githubRepoData = await githubRepoRes.json();
    const githubRepoCount = githubRepoData.data?.total ?? 0;

    const aiToolsRes = await fetch(`${baseUrl}/aitools/stats`);
    const aiToolsData = await aiToolsRes.json();
    const aiToolsCount = aiToolsData.data?.total ?? 0;

    return {
      githubRepoCount: `${githubRepoCount} repo`,
      aiToolsCount: `${aiToolsCount} tool`
    };
  } catch (error) {
    console.error('failed to fetch data:', error);
    return {
      githubRepoCount: '--',
      aiToolsCount: '--'
    };
  }
}