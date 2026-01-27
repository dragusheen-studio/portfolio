/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBubble from "@/components/pages/contact/FakeChat/ChatBubble"
import type { IMessage, TMessageSide } from "@/types/Message";


/* ----- COMPONENT ----- */
function FakeChat() {
	const [messages, setMessages] = useState<IMessage[]>([]);

	const nextId = useRef(0);
	const currentTurn = useRef<TMessageSide>('left');
	const isMountedRef = useRef(true);
	const messageLimite = 6;

	const getRandomWidth = () => {
		const widths = ["w-24", "w-32", "w-40", "w-48", "w-56", "w-64"];
		return widths[Math.floor(Math.random() * widths.length)];
	};

	const getRandomLines = () => Math.floor(Math.random() * 3) + 1;
	const getRandomDelay = () => Math.floor(Math.random() * (2500 - 500 + 1) + 500);

	useEffect(() => {
		isMountedRef.current = true;
		let timeoutId: ReturnType<typeof setTimeout>;

		const addNewMessage = (newMessage: IMessage) => {
			setMessages(prev => {
				const newList = [...prev, newMessage];
				return newList.length > messageLimite ? newList.slice(newList.length - messageLimite) : newList;
			});
		}

		const getNewMessage = () => {
			nextId.current = nextId.current >= messageLimite * 2 ? 0 : nextId.current;
			return {
				id: nextId.current++,
				side: currentTurn.current,
				width: getRandomWidth(),
				lines: getRandomLines()
			};
		}

		const createNewMessage = () => {
			addNewMessage(getNewMessage());
			currentTurn.current = currentTurn.current === 'left' ? 'right' : 'left';
			console.log(nextId.current);
		}

		const chatLoop = () => {
			timeoutId = setTimeout(() => {
				if (!isMountedRef.current) return;
				createNewMessage();
				chatLoop();
			}, getRandomDelay());
		};

		for (let i = 0; i < messageLimite; i++) createNewMessage();
		chatLoop();

		return () => {
			isMountedRef.current = false;
			clearTimeout(timeoutId);
		};
	}, []);


	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
			animate={{ opacity: 1, scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className="relative flex justify-center md:justify-end h-112.5"
		>
			<div className="absolute inset-0 bg-linear-to-bl from-dragusheen-primary/30 to-dragusheen-secondary/30 blur-[80px] rounded-full opacity-40 animate-pulse"></div>
			<div className="relative glass-panel w-80 md:w-105 h-full rounded-3xl border border-white/20 flex flex-col overflow-hidden shadow-2xl">
				<div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-5 gap-3 shrink-0 z-20 backdrop-blur-md">
					<div className="flex gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
						<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
						<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
					</div>
					<div className="ml-auto flex items-center gap-2">
						<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
						<span className="text-xs font-bold text-white/50">Live Chat</span>
					</div>
				</div>
				<div className="flex-1 p-6 flex flex-col gap-3 overflow-hidden justify-end relative z-10">
					<div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>
					<AnimatePresence mode="popLayout" initial={false}>
						{messages.map((msg) => (
							<ChatBubble key={msg.id} msg={msg} />
						))}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
}


/* ----- EXPORTS ----- */
export default FakeChat;
