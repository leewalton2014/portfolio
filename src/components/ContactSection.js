import React from "react";
//styles
import styled from "styled-components";
import { About } from "../styles";
//icons
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactSection = () => {
    //return
    return (
        <Faq className="Faq">
            <h2>
                <span>Contact Me</span>
            </h2>
            <div className="faq-line"></div>
            <p>
                <a href="mailto:lsj.walton@outlook.com" rel="noreferrer">
                <IoIosMail size={70} color='#23d997'/>
                <h4>Email</h4>
                    lsj.walton@outlook.com
                </a>
            </p>
            <p>
                <a
                    href="https://github.com/leewalton2014"
                    target="_blank"
                    rel="noreferrer"
                >
                <FaGithub size={70} color='#23d997'/>
                <h4>Github</h4>
                    @leewalton2014
                </a>
            </p>
            <p>
                <a
                    href="https://www.linkedin.com/in/lee-walton-932287142/"
                    target="_blank"
                    rel="noreferrer"
                >
                <FaLinkedin size={70} color='#23d997'/>
                <h4>LinkedIn</h4>
                    Lee Walton
                </a>
            </p>
            <p> 
                <a
                    href="https://g.dev/lwalton"
                    target="_blank"
                    rel="noreferrer"
                >
                <FaGoogle size={70} color='#23d997'/>
                <h4>Google Dev</h4>
                    @lwalton
                </a>
            </p>
        </Faq>
    );
};

const Faq = styled(About)`
    height: auto;
    background: #272727;
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 1rem;
        font-weight: lighter;
    }
    h4 {
        padding-bottom: 1rem;
    }
    a{
        font-size: 2rem;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default ContactSection;
