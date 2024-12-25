import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Tech": "Tech",
      "Projects": "Projects",
      "Contact": "Contact",
      "Web Developer": "Web Developer",
      "Let's Get in Touch!": "Let's Get in Touch!",
      "Send Me an Email": "Send Me an Email",
      "I'm always open to new opportunities and collaborations. Feel free to reach out via email!": "I'm always open to new opportunities and collaborations. Feel free to reach out via email!",
      "About" : "Hi, I’m Sencer, a 24-year-old web developer based in Istanbul, Turkey. I work with both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and Express. I'm passionate about building clean, user-friendly websites and efficient, scalable web applications.",
      "GitHub Repository": "GitHub Repository",
      "projects": {
        "repDiary": {
          "title": "RepDiary",
          "description": "Rep Diary is a MERN stack web application that allows users to create, read, delete, and customize their workout plans for seven days a week.",
          "note": "Try it out yourself! E-mail: site.test1535@gmail.com Password: Test.site1535"
        },
        "skySight": {
          "title": "SkySight",
          "description": "Sky Sight is a weather app that provides real-time weather info using the OpenWeather API."
        },
        "archersRise": {
          "title": "Archers Rise",
          "description": "Archers Rise is a platformer game where you guide an archer through platforms, collect points, and avoid falling."
        },
        "portfolio": {
          "title": "Personal Portfolio Website",
          "description": "A responsive and interactive portfolio website designed to showcase my skills, projects, and my learning journey in web development."
        },
        "Collers": {
          "title": "Collers",
          "description": "Collers is a sneaker collection website developed as a frontend case study. Built with React and Tailwind CSS, following a provided Figma design."
         },
         "Rezilla": {
          "title": "Rezilla",
          "description": "Rezilla is a real estate website developed as a frontend case study. Built with React and Tailwind CSS, following a provided Figma design."
         }
      }
    }
  },
  tr: {
    translation: {
      "Home": "Anasayfa",
      "Tech": "Teknolojiler",
      "Projects": "Projeler",
      "Contact": "İletişim",
      "Web Developer": "Web Geliştiricisi",
      "Send Me an Email": "Bana E-posta Gönder",
      "Let's Get in Touch!": "Hadi İletişime Geçelim!",
      "I'm always open to new opportunities and collaborations. Feel free to reach out via email!": "Her zaman yeni fırsatlara ve işbirliklerine açığım. E-posta yoluyla bana ulaşmaktan çekinmeyin!",
      "About": "Merhaba ben Sencer, İstanbul'da yaşayan 24 yaşında bir web geliştiricisiyim. HTML, CSS, JavaScript, React, Node.js ve Express dahil olmak üzere hem ön uç hem de arka uç teknolojileriyle çalışıyorum. Hızlı, kullanıcı dostu ve verimli web siteleri oluşturma konusunda tutkuluyum.",
      "GitHub Repository": "GitHub Deposu",
      "projects": {
        "repDiary": {
          "title": "RepDiary",
          "description": "Rep Diary, kullanıcıların haftanın yedi günü için egzersiz planlarını oluşturmasına, okumasına, silmesine ve özelleştirmesine olanak tanıyan bir MERN yığını web uygulamasıdır.",
          "note": "Kendiniz deneyin! E-posta: site.test1535@gmail.com Şifre: Test.site1535"
        },
        "skySight": {
          "title": "SkySight",
          "description": "Sky Sight, OpenWeather API'sini kullanarak gerçek zamanlı hava durumu bilgisi sağlayan bir hava durumu uygulamasıdır."
        },
        "archersRise": {
          "title": "Archers Rise",
          "description": "Archers Rise, bir okçuyu platformlardan geçirerek puan topladığınız ve düşmekten kaçınmanız gereken bir platform oyunudur."
        },
        "portfolio": {
          "title": "Kişisel Portfolyo Web Sitesi",
          "description": "Becerilerimi, projelerimi ve web geliştirme yolculuğumu sergilemek için tasarlanmış duyarlı ve etkileşimli bir portfolyo web sitesidir."
        },
        "Collers": {
          "title": "Collers",
          "description": "Collers, ön uç vaka çalışması olarak geliştirilen bir spor ayakkabı koleksiyonu web sitesidir. Sağlanan Figma tasarımı React ve Tailwind CSS ile oluşturulmuştur."
         },
         "Rezilla": {
          "title": "Rezilla",
          "description": "Rezilla, ön uç vaka çalışması olarak geliştirilen bir emlak web sitesidir. Figma tasarımını takip ederek React ve Tailwind CSS ile oluşturulmuştur."
         }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;