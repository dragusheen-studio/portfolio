/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPE ----- */
interface IProjectTag {
	name: string;
	important: boolean;
}

interface IProjectLink {
	name: string;
	url: string;
}

interface IProjectClient {
	name: string;
	url: string;
	description: string;
}

interface IProjectDetails {
	role: string;
	client?: IProjectClient;
	status: string;
	problem: string;
	solution: string;
	features: string[];
	gallery: string[];
	version: string;
}

interface IProject {
	id: number;
	github_url: string;
	stars: number;
	last_push: string;
	title: string;
	subtitle: string;
	description: string;
	tags: IProjectTag[];
	image: string;
	links: IProjectLink[];
	featured: boolean;
	details: IProjectDetails;
}


/* ----- EXPORTS ----- */
export type { IProjectTag, IProjectLink, IProject, IProjectDetails };
