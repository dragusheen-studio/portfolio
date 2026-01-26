/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import BentoGrid from "@/components/pages/home/BentoGrid/BentoGrid";
import HomeHero from "@/components/pages/home/Hero";
import React from "react";


/* ----- COMPONENT ----- */
const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col w-full">
			<HomeHero />
			<BentoGrid />
		</div>
	);
};


/* ----- EXPORTS ----- */
export default HomePage;
