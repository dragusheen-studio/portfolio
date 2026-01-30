/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPE ----- */
interface IGitHubRepo {
	id: number;
	name: string;
	html_url: string;
	stargazers_count: number;
	pushed_at: string;
	default_branch: string;
}

interface IRepoCacheMeta {
	id: number;
	lastUpdate: string;
	github_url: string;
	repo_name: string;
	default_branch: string;
	stars: number;
}


/* ----- EXPORTS ----- */
export type { IGitHubRepo, IRepoCacheMeta };
