import { t } from "i18next";
import { motion } from "motion/react";

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="scroll-mt-20 min-h-screen flex flex-col justify-center px-6 md:px-20 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                {t('section.projects.title')}
            </h2>

            <div className="max-w-3xl mx-auto bg-gray-900 border border-emerald-600 rounded-2xl shadow-lg p-8 text-gray-100 text-lg leading-relaxed text-center">
                <p>
                    {t('section.projects.description')}
                </p>
            </div>
        </motion.section>

    );
}