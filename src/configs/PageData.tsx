/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Route, Routes } from "react-router-dom";
import type { IPageConfig } from "@/types/PageConfig";

import Project from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";


/* ----- DATAS ----- */
const PagesDatas: IPageConfig[] = [
	{
		name: "Accueil",
		path: "/",
		content: Home,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Projets",
		path: "/projects",
		content: Project,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Parcours",
		path: "/about",
		content: About,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "Contact",
		path: "/contact",
		content: Contact,
		displayInNavBar: true,
		displayLayout: true,
	},
	{
		name: "NotFound",
		path: "*",
		content: NotFound,
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
