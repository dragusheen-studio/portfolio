/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import CodeWindow from "./CodeWindow";
import DesignWindow from "./DesignWindow";
import RenderWindow from "./RenderWindow";


/* ----- COMPONENT ----- */
function LiveRender() {
	const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");
	const [color, setColor] = useState<"primary" | "secondary">("primary");
	const [activeTool, setActiveTool] = useState<"none" | "code" | "design">("none");

	useEffect(() => {
		let isMounted = true;

		const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

		const sequence = async () => {
			const ChangeToHorizontal = async () => {
				setActiveTool("code");
				await wait(1500);
				setLayout("horizontal");
				setActiveTool("none");
			};

			const ChangeToSecondary = async () => {
				setActiveTool("design");
				await wait(1500);
				setColor("secondary");
				setActiveTool("none");
			}

			const ChangeToVertical = async () => {
				setActiveTool("code");
				await wait(1500);
				setLayout("vertical");
				setActiveTool("none");
			};

			const ChangeToPrimary = async () => {
				setActiveTool("design");
				await wait(1500);
				setColor("primary");
				setActiveTool("none");
			};

			let index = 0;
			const animations = [ChangeToHorizontal, ChangeToSecondary, ChangeToVertical, ChangeToPrimary];

			while (isMounted) {
				await wait(1000);
				await animations[index]();
				index = (index + 1) % animations.length;
			}
		};

		sequence();
		return () => { isMounted = false; };
	}, []);

	const isCoding = activeTool === "code";
	const isDesigning = activeTool === "design";
	const isHorizontal = layout === "horizontal";
	const isSecondary = color === "secondary";

	return (
		<div className="relative h-125 w-full flex items-center justify-center lg:justify-end perspective-1000">
			<CodeWindow isCoding={isCoding} />
			<DesignWindow isDesigning={isDesigning} isSecondary={isSecondary} />
			<RenderWindow isHorizontal={isHorizontal} isSecondary={isSecondary} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default LiveRender;
