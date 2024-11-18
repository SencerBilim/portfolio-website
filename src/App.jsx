import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';


function App() {
  return (

    <I18nextProvider i18n={i18n}>
      <div className="relative min-h-screen w-full bg-slate-900 ">
      
        <main className="relative flex z-30 flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
        <div
          className="absolute left-0 right-0 m-auto z-10 max-w-xs h-[457px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 12.73%, rgba(14, 165, 233, 0.31) 15.74%, rgba(94, 159, 205, 0.26) 25.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            top: "1000px",
          }}
        ></div>
        <div className="absolute inset-1 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:74px_27px] "></div>
        
      </div>
      </I18nextProvider>
  );
}

export default App;

