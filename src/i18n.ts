import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: 'Hi, I am',
      fullStackDeveloper: 'Full Stack Developer',
      techStack: 'React, Vite, Tailwind, Node.js, Express, MongoDB etc.',
      uiUxEnthusiast: 'UI/UX Enthusiast',
      description: 'I build exceptional digital experiences that combine clean code with stunning designs. Passionate about creating responsive and user-friendly applications that solve real-world problems.',
      githubProfile: 'GitHub Profile',
      linkedinProfile: 'LinkedIn Profile',
      emailContact: 'Email Contact'
    },
  },
  pt: {
    translation: {
      greeting: 'Olá, eu sou',
      fullStackDeveloper: 'Desenvolvedor Full Stack',
      techStack: 'React, Vite, Tailwind, Node.js, Express, MongoDB etc.',
      uiUxEnthusiast: 'UI/UX Enthusiast',
      description: 'Eu construo experiências digitais excepcionais que combinam código limpo com designs impressionantes. Apaixonado por criar aplicativos responsivos e fáceis de usar que resolvem problemas do mundo real.',
      githubProfile: 'Perfil do GitHub',
      linkedinProfile: 'Perfil do LinkedIn',
      emailContact: 'Contato por Email'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
