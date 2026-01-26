/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IWebsiteConfig } from "@/types/WebsiteConfig";


/* ----- DATAS ----- */
const WebsiteConfigDatas: IWebsiteConfig = {
	siteName: "Dragusheen",
	iconLink: "/svg/icon.svg",
}

/* ----- FUNCTIONS ----- */
function GetWebsiteConfigDatas() {
	return WebsiteConfigDatas;
}


/* ----- EXPORTS ----- */
export { GetWebsiteConfigDatas };
