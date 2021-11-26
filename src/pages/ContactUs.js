import React from "react";
//animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            //style={{ background: "#fff" }}
        >
            <div className="bullets">
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Get in touch.
                        </motion.h2>
                    </Hide>
                </Title>
                <div>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <Circle />
                            <h2>Send us a message</h2>
                        </Social>
                    </Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send an email</h2>
                    </Social>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </div>
            </div>
            <ContactForm className="form">
                <h2>Get in touch ...</h2>
                <form>
                    <label htmlFor="fname">Name</label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="Your name ..."
                    />
                    <label htmlFor="subject">What is your enquiry</label>
                    <select id="subject" name="subject">
                        <option value="customer">Customer</option>
                        <option value="public">Public</option>
                        <option value="vacancy">Vacancy</option>
                    </select>
                    <label for="messege">Message</label>
                    <textarea
                        id="messege"
                        name="messege"
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                    ></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </ContactForm>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    display: flex;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 1rem;
        display: block;
    }
`;
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
        font-size: 3rem;
    }
`;
const ContactForm = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    input[type="text"],
    select,
    textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type="submit"] {
        background-color: #ffffff;
        color: #23d997;
        padding: 12px 20px;
        border: 2px solid #23d997;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #23d997;
        color: white;
    }
    h2 {
        border-bottom: #23d997 solid;
        margin-bottom: 1rem;
    }
`;
export default ContactUs;
