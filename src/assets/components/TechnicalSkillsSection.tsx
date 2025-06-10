import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import skills from "../../skills";
import Card from "./Card";


const TechnicalSkillsSection = () => {

  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center px-6 md:px-20 bg-gray-800 py-20 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >

      <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
        {t('section.skills.title')}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {skills.map((item, index) => (
          <Card 
            key={index}
            title={item.skillName}
            description={item.skillDesc}/>
        ))}
      </div>
    </motion.section>

  );
}
export default TechnicalSkillsSection;