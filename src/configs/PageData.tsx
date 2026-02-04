/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Route, Routes } from "react-router-dom";
import type { IPageConfig } from "@/types/PageConfig";

import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import StudioPage from "@/pages/Studio";
import ProjectPage from "@/pages/Project";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";


/* ----- DATAS ----- */
const PagesDatas: IPageConfig[] = [
	{
		name: "Accueil",
		path: "/",
		content: HomePage,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Studio",
		path: "/studio",
		content: StudioPage,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Project",
		path: "/studio/:projectId",
		content: ProjectPage,
		displayInNavBar: false,
		displayLayout: true,
	},
	{
		name: "Parcours",
		path: "/about",
		content: AboutPage,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Contact",
		path: "/contact",
		content: ContactPage,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "NotFound",
		path: "*",
		content: NotFoundPage,
		displayInNavBar: false,
		displayLayout: false,
	},
];

/* ----- FUNCTIONS ----- */
function GetPagesDatas() {
	return PagesDatas;
}

function GetPagesInNavBar() {
	return PagesDatas.filter(p => p.displayInNavBar);
}

function Router() {
	return (
		<Routes>
			{PagesDatas.map((pageData) => (
				<Route
					key={pageData.name}
					path={pageData.path}
					element={<Layout children={pageData} />}
				/>
			))}
		</Routes>
	);
}

/* ----- EXPORTS ----- */
export { GetPagesDatas, GetPagesInNavBar, Router };
