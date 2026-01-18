/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { Link, useLocation } from "react-router-dom";
import { GetPagesInNavBar } from "@/configs/PageData";
import NavBarFixedList from "@/components/layout/Navbar/NavBarFixedList";


/* ----- COMPONENT ----- */
function NavbarLaptop() {
	const location = useLocation();
	const navPages = GetPagesInNavBar();

	const isLinkActive = (path: string) => location.pathname === path;

	return (
		<nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-center pointer-events-none">
			<NavBarFixedList>
				<div className="block w-px h-6 bg-white/10"></div>

				<div className="flex gap-2">
					{navPages.map((page) => (
						<Link
							key={page.name}
							to={page.path}
							className={`
                                    relative px-4 py-2 font-display font-bold transition-all duration-300 rounded-lg
                                    ${isLinkActive(page.path)
									? "text-dragusheen-primary bg-white/5 shadow-[0_0_15px_rgba(123,44,191,0.2)]"
									: "text-dragusheen-muted hover:text-dragusheen-text hover:bg-white/5"
								}
                                `}
						>
							{page.name}
						</Link>
					))}
				</div>
			</NavBarFixedList>
		</nav>
	);
}


/* ----- EXPORTS ----- */
export default NavbarLaptop;
