import image1 from "../images/RepDiary.png";
import image2 from "../images/SkySight.png";
import image3 from "../images/Archer.png";
import image4 from "../images/portfolio.png";
import image5 from "../images/case-study1.png";
import image6 from "../images/case-study-2.png";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    image: image6,
    titleKey: "projects.Rezilla.title",
    descriptionKey: "projects.Rezilla.description",
    technologies: ["React", "Tailwind"],
    liveLink: "https://sb-case-study-2.vercel.app/",
    repLink: "https://github.com/SencerBilim/Case-Study-2", 
  },
  {
    image: image5,
    titleKey: "projects.Collers.title",
    descriptionKey: "projects.Collers.description",
    technologies: ["React", "Tailwind"],
    liveLink: "https://sencer-bilim-case-study.vercel.app/",
    repLink: "https://github.com/SencerBilim/Case-Study-1", 
  },
  {
    image: image1,
    titleKey: "projects.repDiary.title",
    descriptionKey: "projects.repDiary.description",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "CSS", "HTML"],
    liveLink: "https://repdiary-hfsw.onrender.com/login",
    repLink: "https://github.com/SencerBilim/RepDiary",
    noteKey: "projects.repDiary.note", 
  },
  {
    image: image2,
    titleKey: "projects.skySight.title",
    descriptionKey: "projects.skySight.description",
    technologies: ["Javascript", "CSS", "HTML"],
    liveLink: "https://skysight.onrender.com/",
    repLink: "https://github.com/SencerBilim/SkySight-Weather-App",
  },
  {
    image: image3,
    titleKey: "projects.archersRise.title",
    descriptionKey: "projects.archersRise.description",
    technologies: ["Javascript", "CSS", "HTML"],
    liveLink: "https://archers-rise.vercel.app/",
    repLink: "https://github.com/SencerBilim/Archers-Rise-Game",
  },
  {
    image: image4,
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    technologies: ["React", "Tailwind", "HTML"],
    repLink: "https://github.com/SencerBilim/portfolio-website",
    liveLink: "https://sencer-bilim.com/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 sm:gap-6 md:flex-row md:gap-24">
        {/* Image Section */}
        <div className="flex w-full max-w-[37.5rem] h-auto items-center justify-center">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="h-auto w-full rounded-2xl object-cover transition-all duration-300 hover:scale-105 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-indigo-300/10 sm:w-[90%] md:w-full"
            />
          </a>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3 w-full md:text-left">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <div className="flex text-lg font-semibold md:text-xl group">
                {t(project.titleKey)}
                <GoArrowUpRight className="relative scale-75 translate-y-2 transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-1" />
              </div>
            </a>

            <p className="text-sm text-gray-400 md:text-base">{t(project.descriptionKey)}</p>

            {/* Note */}
            {project.noteKey && (
              <p className="text-white/70 font-medium text-sm mt-3 p-2 rounded-md bg-black/40 shadow-lg">
                {t(project.noteKey)}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-gray-400">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black/40 p-2.5">
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub Button */}
          {project.repLink && (
            <div className="flex flex-wrap gap-5">
              <a
                href={project.repLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-black/40 px-4 py-2 text-white/80 border-b border-b-sky-100/50 transition-all duration-300 hover:bg-slate-100/80 hover:text-black/80"
              >
                <BsGithub className="text-xl" />
                {t("GitHub Repository")}
              </a>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-5xl font-light text-white md:text-4xl">{t("Projects")}</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
