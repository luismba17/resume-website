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
                                    title="Google Cloud Professional Cloud Architect"
                                    description="Google Cloud Platform | 2025 – 2027"
                                    url="https://www.credly.com/badges/621d2dd2-748d-4a78-ad51-8afe96bbb24d/public_url"
                                    icon={
                                        <img
                                            src="https://images.credly.com/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"
                                            alt="Google Cloud Logo"
                                            className="w-18 h-14 mb-4"
                                        />
                                    } />

                <Card
                                    title="Google Cloud Associate Cloud Engineer"
                                    description="Google Cloud Platform | 2025 – 2028"
                                    url="https://www.credly.com/badges/1fc4d47b-4d24-40c1-a9a7-dde946f19684/public_url"
                                    icon={
                                        <img
                                            src="https://images.credly.com/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png"
                                            alt="Google Cloud Logo"
                                            className="w-18 h-14 mb-4"
                                        />
                                    } />
                <Card
                    title="AWS Certified Cloud Practitioner"
                    description="Amazon Web Services | 2020 – 2023"
                    url="https://www.credly.com/badges/8c2d0e09-6022-4b7a-8e0c-59b112a72f88/public_url"
                    icon={
                        <img
                            src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                            alt="AWS Logo"
                            className="w-20 h-14 mb-4" />
                    } />
            </div>

        </motion.section>
    );
}