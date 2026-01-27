/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { ReactNode } from "react";


/* ----- TYPE ----- */
interface IContactLink {
	label: string;
	value: string;
	url: string;
	icon: ReactNode;
}

interface IContactCategory {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	color: string;
	links: IContactLink[];
}


/* ----- EXPORTS ----- */
export type { IContactLink, IContactCategory };
