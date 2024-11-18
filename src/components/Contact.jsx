import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>

          <h1 className='text-center text-5xl md:text-7xl' >

            <span className='bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent'>
            {t("Let's Get in Touch!")}
            </span>
          </h1>
          <p className='text-center text-lg font-semibold text-gray-500'>{t("I'm always open to new opportunities and collaborations. Feel free to reach out via email!")}</p>

          <a
            href="mailto:sencer.bilim@gmail.com"
            className="text-nowrap rounded-lg border-b border-white/50 bg-black/30 px-5 py-3 text-lg font-bold text-white/70 shadow-lg shadow-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-300/30 hover:text-white"
            aria-label="Send me an email"
          >
            {t('Send Me an Email')}
          </a>

      </div>
    </div>
  )
}

export default Contact
