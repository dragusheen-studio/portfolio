/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import React from 'react';


/* ----- TYPE ----- */
export interface IPageConfig {
	name: string;
	path: string;
	content: React.FC;
	displayInNavBar: boolean;
	displayNavBar: boolean;
}
