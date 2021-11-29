import React from "react";
import avatar from "../img/AvatarBlue.png";
//styled
import { About, Description, Image, Hide } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { fade, titleAnimation } from "../animation";
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
                            <span>Lee Walton</span>
                        </motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2 variants={titleAnimation}>
                            Full Stack Web Developer
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I am a recent Computer Science graduate (First Class) and a
                    full stack web developer. My main experience is in PHP,
                    React, Node and NextJs. I am also compitent in other
                    languages. Please view my work below.
                </motion.p>
                <button>
                    <a href="/#MyWork">My Work</a>
                </button>
            </Description>
            <Image className="image">
                <img
                    src={avatar}
                    alt="avitar image"
                />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;
