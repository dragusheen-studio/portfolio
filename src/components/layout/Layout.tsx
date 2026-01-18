/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import AnimatedBackground from "./AnimatedBackground";
import type { IPageConfig } from "@/types/PageConfig";
import Navbar from "./Navbar/Navbar";


/* ----- PROPS ----- */
interface LayoutProps {
	children: IPageConfig;
}


/* ----- COMPONENT ----- */
function Layout({ children }: LayoutProps) {
	return (
		<>
			<AnimatedBackground />

			{children.displayNavBar && <Navbar />}

			<main>
				<children.content />
			</main>
		</>
	);
}


/* ----- EXPORTS ----- */
export default Layout;
