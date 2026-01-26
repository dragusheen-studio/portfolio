/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- TYPE ----- */
interface ITimelineChapter {
    id: number;
    navLabel: string;
    year: string;
    title: string;
    subtitle: string;
    description: string;
    quote: string;
    tags: string[];
    theme: string;
    align: "left" | "right";
    image: string;
}


/* ----- EXPORTS ----- */
export type { ITimelineChapter };
