import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const ExperienceSection = () =>{

    const { t } = useTranslation();
    
      const experience = [
        {
          role: "Full Stack Software Engineer",
          company: "Valtech",
          location: "Chicago, IL, USA",
          date: "Sep 2022 – Present",
          details: t('section.experience.valtech.details', { returnObjects: true }) as string[]
    
        },
        {
          role: "Full Stack Software Engineer",
          company: "4-Serv Solutions Inc.",
          location: "Detroit, MI, USA",
          date: "Sep 2019 – Sep 2022",
          details: t('section.experience.4servsolutions.details', { returnObjects: true }) as string[]
    
        },
        {
          role: "Full-Stack Software Developer",
          company: "Grupo KX",
          location: "Mérida, Yucatán, México",
          date: "Oct 2016 – Sep 2019",
          details: t('section.experience.grupokx.details', { returnObjects: true }) as string[]
        }
      ];

    return(
        <motion.section id="experience" 
        className="scroll-mt-20 px-6 md:px-20 py-20" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <h2 className="mb-20 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {t('section.experience.title')}
            </span>
          </h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experience.map((job, idx) => (
              <li key={idx} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.company}
                  <span className={`${idx === 0 ? 'bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3' : 'invisible'}`}>
                    {t('section.experience.lastjob.tag')}
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
                <p className="text-sm text-gray-400">{job.role}</p>
                <p className="text-sm text-gray-400 italic mb-2">{job.location}</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  {job.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </li>
            ))}
          </ol>
        </motion.section>
    );
}
export default ExperienceSection;