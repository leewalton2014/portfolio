import React from "react";
//styles
import styled from "styled-components";
import { About } from "../styles";

const WorkSection = () => {
    //return
    return (
        <Work className="Work">
            <h2>
                <span>My Work</span>
            </h2>
            <div className="faq-line"></div>
            <p>
                For more info on the technical architecture of a project read
                the README file shown in the GitHub repository.
            </p>
            <div className="row-max-3">
                <div className="card card-course">
                    <div className="card-content">
                        <div className="text-center">
                            <img src="/img/mpwb2.PNG" />
                        </div>
                        <h3>My Personal Wellbeing</h3>
                        <p>
                            My Personal Wellbeing is a digital online diary
                            created as a collaberation between the NHS and
                            Northumbria University for use by NHS staff as a
                            response to the pandemic. The project is built using
                            PHP, HTML, CSS, MySQL.
                        </p>
                        <div className="tags">
                            <span className="tag tag-sm tag-react">#php</span>
                            <span className="tag tag-sm tag-react">#mysql</span>
                        </div>
                        <a
                            className="btn btn-green btn-block button"
                            href="https://mypersonalwellbeing.co.uk/"
                            target="_blank"
                        >
                            View Site
                        </a>
                    </div>
                </div>
                <div className="card card-course">
                    <div className="card-content">
                        <div className="text-center">
                            <img src="/img/ons1.PNG" />
                        </div>
                        <h3>Open Narrative System</h3>
                        <p>
                            The Open Narrative System is a CMS system built by
                            Northumbria University for the NHS/TICA. The
                            platform was built to showcase trauma informed care
                            narratives collected at a summit in January 2020.
                        </p>
                        <div className="tags">
                            <span className="tag tag-sm tag-react">#php</span>
                            <span className="tag tag-sm tag-react">#mysql</span>
                        </div>
                        <a
                            className="btn btn-green btn-block button"
                            href="http://unn-kcfm7.newnumyspace.co.uk/ONS/cms.php?siteID=10"
                            target="_blank"
                        >
                            View Site
                        </a>
                    </div>
                </div>
                <div className="card card-course">
                    <div className="card-content">
                        <div className="text-center">
                            <img src="/img/nextfire1.png" />
                        </div>
                        <h3>Next JS Blog</h3>
                        <p>
                            This project was built as part of a online course I
                            took after university to upgrade my Javascript
                            knowlege on newer frameworks such as React and Next
                            JS. I personalised this project to be my personal
                            blog.
                        </p>
                        <div className="tags">
                            <span className="tag tag-sm tag-react">
                                #nextjs
                            </span>
                            <span className="tag tag-sm tag-react">
                                #javascript
                            </span>
                            <span className="tag tag-sm tag-react">
                                #firebase
                            </span>
                        </div>
                        <a
                            className="btn btn-green btn-block button"
                            href="https://nextfire-blue.vercel.app/"
                            target="_blank"
                        >
                            View Site
                        </a>
                        <a
                            className="btn btn-green btn-block button"
                            href="https://github.com/leewalton2014/nextfire"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="row-max-3">
                <div className="card card-course">
                    <div className="card-content">
                        <h3>Wellbeing Data Analysis (Data Science)</h3>
                        <p>
                            One of my tasks while in my previous role was to
                            analyse data collected from the website we were
                            using to collect data during research, and to
                            develop a tool to do this automatically.
                        </p>
                        <div className="tags">
                            <span className="tag tag-sm tag-react">
                                #python
                            </span>
                            <span className="tag tag-sm tag-react">
                                #pandas
                            </span>
                            <span className="tag tag-sm tag-react">
                                #matplotlib
                            </span>
                        </div>
                        <a
                            className="btn btn-green btn-block button"
                            href="https://github.com/leewalton2014/Python/blob/main/data_dashboard.py"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="card card-course">
                    <div className="card-content">
                        <h3>Crime Data Analysis (Data Science)</h3>
                        <p>
                            As part of my final year dissertation I had to
                            create a python notebook to analyse UK crime data.
                            With the use of a population dataset for each LSOA
                            code of the locations in the UK I had to calculate
                            and present the crime rates of different cities in
                            the UK.
                        </p>
                        <div className="tags">
                            <span className="tag tag-sm tag-react">
                                #python
                            </span>
                            <span className="tag tag-sm tag-react">
                                #pyspark
                            </span>
                            <span className="tag tag-sm tag-react">
                                #pandas
                            </span>
                            <span className="tag tag-sm tag-react">
                                #matplotlib
                            </span>
                        </div>
                        <a
                            className="btn btn-green btn-block button"
                            href="https://github.com/leewalton2014/Python/blob/main/Assignment3(17007224).ipynb"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </Work>
    );
};

const Work = styled(About)`
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
    a {
        font-size: 2rem;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .row-max-3 {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
        justify-content: space-evenly;
        margin-bottom: 2rem;
    }
    .card-course {
        max-width: 720px;
        text-align: center;
        margin: 1em auto;
    }
    .card .card-content {
        padding: 1em;
        margin-bottom: 2rem;
        img {
            max-width: 100%;
            height: auto;
        }
        h3 {
            padding: 1rem;
            font-size: 24px;
        }
        p {
            padding: 1rem;
            margin-bottom: 1rem;
            font-size: 17px;
        }
        .btn {
            margin: 5px;
            border-radius: 8px;
            font-size: 16px;
        }
    }
    .card {
        background: #2a2e35;
        color: #b2becd;
        padding: 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.38);
        display: inline-flex;
        flex-direction: column;
        margin: 0 0 1em;
        width: 100%;
        transform: translateY(0);
        border-radius: 0.25rem;
    }
    .tags {
        width: 100%;
        display: flex;
        margin-bottom: 3rem;
    }
    .tag {
        display: inline-block;
        border-radius: 3px;
        padding: 0.2em 0.5em 0.3em;
        border-radius: 2px;
        background: var(--tag-bg);
        color: var(--text-color);
        font-weight: 600;
        margin: 0.25em 0.1em;
        font-size: 16px;
    }
    .tag-sm {
        display: inline-block;
        letter-spacing: 0.15ch;
        font-weight: 400;
    }
    .tag-react {
        background: #09c372;
        color: #fff;
    }
`;

export default WorkSection;