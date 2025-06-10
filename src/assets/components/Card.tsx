import { motion } from "framer-motion";
import { type ReactNode } from "react";


type CardProps = {
    title: string;
    description: string;
    icon?: ReactNode;
};

const Card = ({ title, description, icon }: CardProps) => {

    return (
        <motion.div
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:border-emerald-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            {icon && <div className="mb-4 flex justify-center items-center">{icon}</div>}
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </motion.div>
    );

}
export default Card;