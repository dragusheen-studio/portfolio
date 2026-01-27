/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IContactLink } from "@/types/Contact";


/* ----- PROPS ----- */
interface ContactLinkCardProps {
	link: IContactLink;
}


/* ----- COMPONENT ----- */
function ContactLinkCard({ link }: ContactLinkCardProps) {
	return (
		<a
			key={link.label}
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 group/link hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
		>
			<div className="text-white/80 group-hover/link:text-white group-hover/link:scale-110 transition-all duration-300">
				{link.icon}
			</div>

			<div className="overflow-hidden">
				<div className="font-bold text-white text-sm transition-all duration-300">
					{link.label}
				</div>
				<div className="text-xs text-dragusheen-muted truncate pr-2">
					{link.value}
				</div>
			</div>

			<div className="ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-white font-bold">
				→
			</div>
		</a>
	);
}


/* ----- EXPORTS ----- */
export default ContactLinkCard;
