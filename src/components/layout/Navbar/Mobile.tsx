/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GetPagesInNavBar } from "@/configs/PageData";
import NavBarFixedList from "./NavBarFixedList";
import BurgerMenu from "./BurgerMenu";
import { scrollToTop } from "@/services/scroll";


/* ----- COMPONENT ----- */
function NavbarMobile() {
	const location = useLocation();
	const navPages = GetPagesInNavBar();
	const [isOpen, setIsOpen] = useState(false);

	const isLinkActive = (path: string) => location.pathname === path;

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
	}, [isOpen]);

	const clickOnLink = () => {
		setIsOpen(false);
		scrollToTop();
	};


	return (
		<>
			<nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between pointer-events-none">
				<NavBarFixedList onLogoClick={() => setIsOpen(false)}>
					<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				</NavBarFixedList>
			</nav >

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-dragusheen-deep/95 backdrop-blur-xl flex flex-col items-center justify-center"
					>
						<div className="flex flex-col gap-6 text-center">
							{navPages.map((page, index) => (
								<motion.div
									key={page.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 + index * 0.1 }}
								>
									<Link
										to={page.path}
										onClick={clickOnLink}
										className={`
                                            font-display text-3xl font-bold transition-colors
                                            ${isLinkActive(page.path) ? "text-dragusheen-primary" : "text-dragusheen-muted"}
                                        `}
									>
										{page.name}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}


/* ----- EXPORTS ----- */
export default NavbarMobile;
