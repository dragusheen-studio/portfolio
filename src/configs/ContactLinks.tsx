/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IContactCategory } from "@/types/Contact";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";


/* ----- DATAS ----- */
const ContactLinks: IContactCategory[] = [
	{
		id: "pro",
		title: "Pour les projets",
		subtitle: "Le Pro",
		description: "C'est ici qu'on clique pour travailler avec toi.",
		color: "from-blue-400 to-cyan-400",
		links: [
			{
				label: "M'écrire un mail",
				value: "nathan.tirolf@epitech.eu",
				url: "mailto:nathan.tirolf@epitech.eu",
				icon: <LuMail size={24} />
			},
			{
				label: "Téléphone",
				value: "+33 7 87 42 64 82",
				url: "tel:+33787426482",
				icon: <LuPhone size={24} />
			},
			{
				label: "LinkedIn",
				value: "Connectons-nous",
				url: "https://www.linkedin.com/in/nathan-tirolf/",
				icon: <FaLinkedin size={24} />
			}
		]
	},
	{
		id: "code",
		title: "Pour le code",
		subtitle: "Le Portfolio vivant",
		description: "Pour voir ce que je fais au quotidien.",
		color: "from-purple-400 to-pink-400",
		links: [
			{
				label: "GitHub",
				value: "@Dragusheen",
				url: "https://github.com/Dragusheen",
				icon: <FaGithub size={24} />
			}
		]
	},
	{
		id: "direct",
		title: "Pour le direct",
		subtitle: "La discussion",
		description: "Pour ceux qui préfèrent le chat ou la voix.",
		color: "from-green-400 to-emerald-400",
		links: [
			{
				label: "Discord",
				value: "Dragusheen",
				url: "https://discord.com/users/1198005001952444598",
				icon: <FaDiscord size={24} />
			},
			{
				label: "Instagram",
				value: "@dragusheen",
				url: "https://www.instagram.com/dragusheen/",
				icon: <FaInstagram size={24} />
			}
		]
	}
];



/* ----- FUNCTIONS ----- */
function GetContactLinks() {
	return ContactLinks;
}


/* ----- EXPORTS ----- */
export { GetContactLinks };
