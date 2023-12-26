import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }: TabButtonProps) => {
    const buttonClasses = active ? "text-primary" : "text-[#555]/80 dark:text-[#Adb7be]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-primary/80 ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-primary mt-1 mr-3"
            ></motion.div>
        </button>
    );
};

export default TabButton;
