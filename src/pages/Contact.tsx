/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import ContactGrid from "@/components/pages/contact/ContactGrid/ContactGrid";
import ContactHero from "@/components/pages/contact/Hero";


/* ----- COMPONENT ----- */
function Contact() {
    return (
        <div className="w-full flex flex-col">
            <ContactHero />
            <ContactGrid />
        </div>
    );
}


/* ----- EXPORTS ----- */
export default Contact;
