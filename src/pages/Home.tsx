/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import Hero from "@/components/pages/home/Hero";
import React from "react";


/* ----- COMPONENT ----- */
const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col w-full">
			<Hero />
		</div>
	);
};


/* ----- EXPORTS ----- */
export default HomePage;
