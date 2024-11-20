import React from 'react';
import myImage from "../images/my-image-c.jpeg";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation(); 

  
  const downloadCV = () => {
    // Check the current language and decide which CV to download
    const currentLanguage = i18n.language; 
    
    let cvFile = '';
    if (currentLanguage === 'en') {
      cvFile = 'cv/SB-CV-EN.pdf'; // English CV
    } else if (currentLanguage === 'tr') {
      cvFile = 'cv/SB-CV-TR.pdf'; // Turkish CV
    }

    
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = cvFile.split('/').pop(); 
    link.click();
  };

  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={myImage}
            alt="image"
            className="w-[270px] cursor-pointer rounded-3xl shadow-xl shadow-black/80 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/20 md:w-[280px]"
          />
        </motion.div>

        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className='bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent text-5xl font-light md:text-7x1'>
            Sencer Bilim
          </h1>
          <h3 className='bg-gradient-to-l from-gray-400 to-gray-100 bg-clip-text text-transparent text-2xl font-light md:text-3x1 '>
            {t("Web Developer")}
          </h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>
            {t("About")}
          </p>
          <button
            className='flex items-center gap-2 rounded-md bg-black/40 px-5 py-2 text-white/80 border-b border-b-sky-100/50 transition-all duration-300 hover:bg-slate-100/80 hover:text-black/80'
            onClick={downloadCV} 
          >
            {t("CV")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
