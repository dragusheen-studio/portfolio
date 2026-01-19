/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

import NavbarLaptop from "@/components/layout/Navbar/Laptop";
import NavbarMobile from "@/components/layout/Navbar/Mobile";

/* ----- IMPORTS ----- */


/* ----- COMPONENT ----- */
function Navbar() {
	return (
		<>
			<div className="hidden md:block"><NavbarLaptop /></div>
			<div className="block md:hidden"><NavbarMobile /></div>
		</>
	);
}


/* ----- EXPORTS ----- */
export default Navbar;
