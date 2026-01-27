/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPE ----- */
type TMessageSide = 'left' | 'right';


interface IMessage {
	id: number;
	side: TMessageSide;
	width: string;
	lines: number;
}


/* ----- EXPORTS ----- */
export type { IMessage, TMessageSide };
