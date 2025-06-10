import { useTranslation } from "react-i18next";
import Card from "./Card";
import { motion } from "motion/react";

export default function Education() {

    const { t } = useTranslation();

    return (
        <motion.section
            id="education"
            className="scroll-mt-20 min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-gray-800"
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
                {t('section.education.title')}
            </h2>

            <div className="grid gap-10 max-w-5xl mx-auto">

                <Card
                    title={t('education.title')}
                    description="Instituto Tecnológico de Mérida – Mérida, México"
                    icon={
                        <svg
                            className="w-12 h-12 text-emerald-500 mb-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 6H3m9 0h9" />
                        </svg>
                    } />

            </div>
        </motion.section>
    );
}
