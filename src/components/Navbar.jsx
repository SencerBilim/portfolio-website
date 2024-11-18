
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


const Navbar = () => {

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-sky-100/50 bg-black/50 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">

      <a href="#home" className="bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent opacity-80 text-3x1 font-bold transition-all duration 300 hover:opacity-100 hover:scale-105" > &lt;SencerBilim /&gt;</a>

      <ul className="hidden md:flex gap-10"  >
          <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
            <li>{t("Home")}</li>
          </a>

          <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
            <li>{t("Tech")}</li>
          </a>

          <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
            <li>{t("Projects")}</li>
          </a>

          <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
            <li>{t("Contact")}</li>
          </a>
      </ul>


      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-400 hover:opacity-100 hover:scale-125">
        <a href="https://github.com/SencerBilim" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 hover:scale-125">
        <a href="https://www.linkedin.com/in/sencer-bilim" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        </li>

        <LanguageSwitcher />

      </ul>

      {isOpen ? ( 
          <BiX className="block md:hidden text-4xl opacity-70 " onClick={menuOpen}/>
      ) : (
          <BiMenu className="block md:hidden text-4xl opacity-70 " onClick={menuOpen} />
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/80 p-12 ${isOpen ? "block" : "hidden"}`} >
          
          <ul className="flex flex-col gap-8">
          <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
          <li>{t("Home")}</li>
          </a>

          <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
          <li>{t("Tech")}</li>
          </a>

          <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
          <li>{t("Projects")}</li>
          </a>

          <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"> 
          <li>{t("Contact")}</li>
          </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-400 hover:opacity-100 hover:scale-125">
          <a href="https://github.com/SencerBilim" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          </li>

          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 hover:scale-125">
          <a href="https://www.linkedin.com/in/sencer-bilim" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
          </li>

        <LanguageSwitcher />
      </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
