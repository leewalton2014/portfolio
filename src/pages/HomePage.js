import React from "react";
//import page
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import WorkSection from "../components/WorkSection";
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
            <WorkSection />
            <SkillsSection />
            <ContactSection />
        </motion.div>
    );
};

export default AboutUs;
