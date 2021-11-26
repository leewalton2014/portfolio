import React from "react";
import home1 from "../img/home1.png";
//styled
import { About, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
//framer motion
import { motion } from "framer-motion";
import { fade, titleAnimation, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    //do stuff

    //return
    return (
        <About className="About">
            <Description className="description">
                <motion.div className="title">
                    <Hide className="hide">
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>
                    <Link to="/contact">Contact Us</Link>
                </motion.button>
            </Description>
            <Image className="image">
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt="guy with a camera"
                />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;
