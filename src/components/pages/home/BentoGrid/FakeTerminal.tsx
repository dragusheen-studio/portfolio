/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- COMPONENT ----- */
function FakeTerminal() {
	return (
		<div className="absolute right-4 bottom-4 w-40 p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[10px] text-dragusheen-primary opacity-60 group-hover:opacity-100 transition-opacity">
			<div className="flex gap-1.5 mb-2">
				<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
				<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
				<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
			</div>
			<p>import <span className="text-white">Success</span>;</p>
			<p>class <span className="text-yellow-400">System</span> &#123;</p>
			<p>&nbsp;&nbsp;init() &#123; ... &#125;</p>
			<p>&#125;</p>
		</div>
	);
}


/* ----- EXPORT ----- */
export default FakeTerminal;
