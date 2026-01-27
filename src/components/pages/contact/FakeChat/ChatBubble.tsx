/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { IMessage } from "@/types/Message";
import { motion } from "framer-motion";


/* ----- COMPONENT ----- */
function ChatBubble({ msg }: { msg: IMessage }) {
	const leftMessageClasses = "self-start bg-white/10 border-white/10 rounded-bl-sm";
	const rightMessageClasses = "self-end bg-dragusheen-primary/20 border-dragusheen-primary/30 rounded-br-sm";

	const messageClasses = (msg: IMessage) => {
		return `flex flex-col gap-2 p-3 rounded-2xl backdrop-blur-md border shrink-0 
		${msg.width} ${(msg.side === 'left' ? leftMessageClasses : rightMessageClasses)}`;
	};

	function getLines(msg: IMessage) {
		const lines = [];
		for (let i = 0; i < msg.lines; i++) {
			lines.push(
				<div
					key={i}
					className={`h-2 rounded-full ${msg.side === 'left' ? "bg-white/20" : "bg-white/30"}`}
					style={{ width: i === msg.lines - 1 ? '60%' : '90%' }}
				></div>
			);
		}
		return lines;
	}

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 20, scale: 0.8 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
			transition={{ type: "spring", stiffness: 500, damping: 30 }}
			className={messageClasses(msg)}
		>
			{getLines(msg)}
		</motion.div>
	);
};


/* ----- EXPORTS ----- */
export default ChatBubble;
