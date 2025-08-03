const translations = {
    en: {
        title: "Nasser Chaouchi - Portfolio",
        nav_home: "Home",
        nav_about: "About Me",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        welcome: "Welcome to my portfolio!",
        welcome_msg: "Use the navigation bar to explore my profile.",
        resume_msg:"📄 My Resume",
        portfolio_pdf_msg: "📁 My PDF Portfolio",

        // About Page
        about_title: "About Me",
        about_intro: "Hi, I'm Nasser – a French computer science engineer with a passion for AI, data, and solving real-world problems with smart technologies.",
        about_education: "🎓 Academic Background",
        about_education_text: "I graduated from the Université de Technologie de Compiègne (UTC) with a major in Artificial Intelligence and Data Science. I also completed an exchange semester in Zaragoza, Spain, as part of a Data Science Master's program.",
        about_experience: "💼 Professional Experience",
        about_experience_text: "I had the opportunity to work at Numberly (Data Engineering & Project Management), and more recently at Ubisoft as a Data Scientist, analyzing player behavior and game performance using predictive models.",
        about_values: "💡 What Drives Me",
        about_values_text: "What drives me is curiosity, a love for solving meaningful challenges, and the joy of continuous learning. I value clarity, rigor, and collaboration.",
        about_life: "🌱 Life Outside Tech",
        about_life_text: "Outside of tech, I enjoy hiking, cooking, literature, and sports – especially running and chess. I'm always up for a deep conversation or a spontaneous nature adventure."
    },

    fr: {
        title: "Nasser Chaouchi - Portfolio",
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_contact: "Contact",
        welcome: "Bienvenue sur mon portfolio !",
        welcome_msg: "Utilisez la barre de navigation pour explorer mon profil.",
        resume_msg: "📄 Mon CV",
        portfolio_pdf_msg: "📁 Mon Portfolio PDF",

        // About Page
        about_title: "À propos de moi",
        about_intro: "Bonjour, je suis Nasser – ingénieur en informatique passionné par l'IA, la data, et la résolution de problèmes concrets à l'aide de technologies intelligentes.",
        about_education: "🎓 Parcours académique",
        about_education_text: "Je suis diplômé de l'Université de Technologie de Compiègne (UTC) avec une spécialisation en Intelligence Artificielle et Data Science. J’ai aussi effectué un semestre d’échange à Saragosse, en Espagne, dans le cadre d’un master en data science.",
        about_experience: "💼 Expérience professionnelle",
        about_experience_text: "J'ai eu l'opportunité de travailler chez Numberly (Data Engineering & gestion de projet), puis plus récemment chez Ubisoft en tant que Data Scientist, où j’ai analysé le comportement des joueurs et la performance des jeux à l’aide de modèles prédictifs.",
        about_values: "💡 Ce qui me motive",
        about_values_text: "Ce qui me motive, c’est la curiosité, le plaisir de relever des défis utiles, et la soif d’apprendre en continu. Je valorise la clarté, la rigueur et l’esprit d’équipe.",
        about_life: "🌱 En dehors de la tech",
        about_life_text: "En dehors de la tech, j’aime la randonnée, la cuisine, la littérature et le sport – notamment la course à pied et les échecs. J’aime aussi les conversations profondes et les aventures en pleine nature."
    }
};


function switchLanguage(lang) {
    localStorage.setItem("lang", lang);
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("languageSwitcher");
    const savedLang = localStorage.getItem("lang") || "en";

    switcher.value = savedLang;
    switchLanguage(savedLang);

    switcher.addEventListener("change", (e) => {
        switchLanguage(e.target.value);
    });
});
