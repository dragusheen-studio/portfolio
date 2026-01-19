/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import AnimatedBackground from "./AnimatedBackground";
import type { IPageConfig } from "@/types/PageConfig";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


/* ----- PROPS ----- */
interface LayoutProps {
	children: IPageConfig;
}


/* ----- COMPONENT ----- */
function Layout({ children }: LayoutProps) {
	return (
		<div className="relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
			<AnimatedBackground />
			{children.displayLayout && <Navbar />}
			<main><children.content /></main>
			<div className="h-12 w-full" />
			{children.displayLayout && <Footer />}
		</div>
	);
}


/* ----- EXPORTS ----- */
export default Layout;
