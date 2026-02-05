/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- TYPE ----- */
interface ITimelineChapterLink {
    label: string;
    url: string;
}

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
    image: string;
    links: ITimelineChapterLink[];
}


/* ----- EXPORTS ----- */
export type { ITimelineChapter };
