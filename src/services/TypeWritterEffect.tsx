/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";


/* ----- FUNCTIONS ----- */
function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [delta, setDelta] = useState(typingSpeed);

	useEffect(() => {
		const ticker = setTimeout(() => {
			tick();
		}, delta);

		return () => clearTimeout(ticker);
	}, [text, delta]);

	const tick = () => {
		const i = loopNum % words.length;
		const fullText = words[i];

		const updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(deletingSpeed);
		}

		if (!isDeleting && updatedText === fullText) {
			setDelta(pauseTime);
			setIsDeleting(true);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(typingSpeed);
		}
	};

	return text;
}


/* ----- EXPORTS ----- */
export { useTypewriter };
