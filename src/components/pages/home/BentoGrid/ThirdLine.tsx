/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import BentoCard from "@/components/layout/BentoCard";
import { useState } from "react";


/* --- COMPONENT --- */
function BentoGridThirdLine() {
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("nathan.tirolf@epitech.eu");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<BentoCard className="md:col-span-2 min-h-40 items-center justify-center bg-dragusheen-deep/40">
				<div className="relative flex items-center justify-center mb-3">
					<span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
					<span className="relative text-3xl">📍</span>
				</div>
				<div className="text-center">
					<h4 className="text-white font-bold">Saguenay, QC</h4>
					<p className="text-xs text-dragusheen-muted">Canada</p>
				</div>
			</BentoCard>

			<BentoCard className="md:col-span-2 min-h-40 items-center justify-center bg-blue-900/10 hover:bg-blue-900/20 border-blue-500/10">
				<div className="text-4xl mb-2">🎓</div>
				<div className="text-center">
					<h4 className="text-white font-bold">Epitech 4e</h4>
					<p className="text-xs text-dragusheen-muted">Programme Grande École (PGE)</p>
					<p className="text-[10px] text-blue-400 font-mono mt-1">PROMO 2027</p>
				</div>
			</BentoCard>

			<BentoCard
				className="md:col-span-2 min-h-40 items-center justify-center cursor-pointer active:scale-95 bg-dragusheen-primary/5 hover:bg-dragusheen-primary/10"
				onClick={handleCopyEmail}
			>
				<div className="text-3xl mb-2">
					{copied ? "✅" : "📬"}
				</div>
				<div className="text-center">
					<h4 className="text-white font-bold">
						{copied ? "Copié !" : "Me contacter"}
					</h4>
					<p className="text-xs text-dragusheen-muted mt-1">
						nathan.tirolf@epitech.eu
					</p>
					{!copied && (
						<span className="text-[10px] text-white/40 mt-2 block border border-white/10 rounded px-2 py-0.5 w-fit mx-auto">
							Click to copy
						</span>
					)}
				</div>
			</BentoCard>
		</>
	);
}

export default BentoGridThirdLine;
