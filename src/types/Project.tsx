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

interface IProject {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	tags: IProjectTag[];
	image: string;
	links: IProjectLink[];
	featured: boolean;
}


/* ----- EXPORTS ----- */
export type { IProjectTag, IProjectLink, IProject };
