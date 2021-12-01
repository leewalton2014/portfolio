import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
//styles
import styled from "styled-components";
import { About, Description } from "../styles";
//icons
import { FaReact, FaJs, FaPhp, FaNodeJs, FaDatabase, FaPython, FaAws, FaGoogle } from "react-icons/fa";

const SkillsSection = () => {
    //do stuff
    //return
    return (
        <Services className="Services">
            <Description className="description">
                <h2 id="MySkills">My Skills</h2>
                <Cards className="cards">
                    <Card className="card">
                        <div className="icon">
                            <FaReact size={60} color='#23d997'/>
                            <h3>React JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaJs size={60} color='#23d997'/>
                            <h3>Next JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaPhp size={60} color='#23d997'/>
                            <h3>PHP</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaNodeJs size={60} color='#23d997'/>
                            <h3>Node JS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaNodeJs size={60} color='#23d997'/>
                            <h3>Express.js</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaDatabase size={60} color='#23d997'/>
                            <h3>MySQL</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaDatabase size={60} color='#23d997'/>
                            <h3>MongoDB</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaPython size={60} color='#23d997'/>
                            <h3>Python</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaAws size={60} color='#23d997'/>
                            <h3>AWS</h3>
                        </div>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <FaGoogle size={60} color='#23d997'/>
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
        svg{
            
        }
    }
`;

export default SkillsSection;
