import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import Card from "./Card";

export default function Certifications() {
    const { t } = useTranslation();

    return (
        <motion.section
            id="certification"
            className="scroll-mt-20 min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}>
            <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                {t('section.certification.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <Card
                    title="AWS Certified Cloud Practitioner"
                    description="Amazon Web Services | 2020 – 2023"
                    icon={
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050"
                            alt="AWS Logo"
                            className="w-20 h-14 mb-4" />
                    } />

                <Card
                    title="Google Cloud Associate Cloud Engineer"
                    description="Google Cloud Platform | 2025 – 2028"
                    icon={
                        <img
                            src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
                            alt="Google Cloud Logo"
                            className="w-18 h-14 mb-4"
                        />
                    } />
            </div>

        </motion.section>
    );
}