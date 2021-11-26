import React from "react";
//import page
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
    //code here

    return (
        //stuff
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
};

export default AboutUs;
