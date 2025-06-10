import { t } from "i18next";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <motion.section id="contact" className="px-6 md:px-20 py-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>

            <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                {t('contact.title')}
            </h2>
            <p className="text-gray-400 mb-6">
                {t('contact.text')}
            </p>
            <a
                href="mailto:luismba17@gmail.com"
                className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition"
            >
                {t('contact.button')}
            </a>
        </motion.section>
    );
}