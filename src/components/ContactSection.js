import React from "react";
//styles
import styled from "styled-components";
import { About } from "../styles";

const ContactSection = () => {
    //return
    return (
        <Faq className="Faq">
            <h2>
                <span>Contact Me</span>
            </h2>
            <div className="faq-line"></div>
            <p>
                <h4>Email</h4>
                <a href="mailto:lsj.walton@outlook.com" rel="noreferrer">
                    lsj.walton@outlook.com
                </a>
            </p>
            <p>
                <h4>Github</h4>
                <a
                    href="https://github.com/leewalton2014"
                    target="_blank"
                    rel="noreferrer"
                >
                    @leewalton2014
                </a>
            </p>
            <p>
                <h4>LinkedIn</h4>
                <a
                    href="https://www.linkedin.com/in/lee-walton-932287142/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Lee Walton
                </a>
            </p>
            <p>
                <h4>Google Dev</h4>
                <a
                    href="https://g.dev/lwalton"
                    target="_blank"
                    rel="noreferrer"
                >
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
