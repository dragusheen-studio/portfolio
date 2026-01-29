/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import type React from "react";
import type { IconType } from "react-icons";


/* ----- PROPS ----- */
interface ProjectStoryBlocProps {
	content: string;
	icon: IconType;
	title: string;
	colorSet: "primary" | "danger";
	children?: React.ReactNode;
}

/* ----- COMPONENT ----- */
function ProjectStoryBloc({ content, icon: Icon, title, colorSet, children }: ProjectStoryBlocProps) {
	const colors = {
		primary: {
			container: "bg-dragusheen-primary/5 border-dragusheen-primary/20",
			iconBox: "bg-dragusheen-primary shadow-[0_0_15px_rgba(123,44,191,0.4)]"
		},
		danger: {
			container: "bg-red-500/5 border-red-500/20",
			iconBox: "bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]"
		}
	};

	const styles = colors[colorSet];


	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={`${styles.container} border rounded-3xl p-8 md:p-10 backdrop-blur-md relative overflow-hidden`}
		>
			<div className="flex flex-col lg:flex-row gap-12 relative z-10">
				<div className="flex-1">
					<div className="flex items-center gap-4 mb-6">
						<div className={`p-3 rounded-xl text-white ${styles.iconBox}`}>
							<Icon size={20} />
						</div>
						<h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
					</div>
					<p className="text-white/80 text-lg leading-relaxed mb-6">
						{content}
					</p>
				</div>
				{children}
			</div>
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default ProjectStoryBloc;
