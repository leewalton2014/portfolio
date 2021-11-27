import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
//styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import useScroll from "./useScroll";

const SkillsSection = () => {
    //do stuff
    const [element, controls] = useScroll();
    //return
    return (
        <Services className="Services">
            <Description className="description">
                <h2 id="MySkills">My Skills</h2>
                <Cards className="cards">
                    <Card className="card">
                        <div className="icon">
                            <img src={clock} alt="clock icon" />
                            <h3>React JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={clock} alt="teamwork icon" />
                            <h3>Next JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm icon" />
                            <h3>PHP</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Node JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Express.js</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>MySQL</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>MongoDB</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Python</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>AWS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={money} alt="money icon" />
                            <h3>Google Firebase</h3>
                        </div>
                    </Card>
                </Cards>
            </Description>
        </Services>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;
const Card = styled.div`
    flex-basis: 20rem;
    margin: 1rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default SkillsSection;
