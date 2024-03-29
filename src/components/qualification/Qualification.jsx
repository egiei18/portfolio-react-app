import { useState } from "react";
import React from "react";
import "./qualification.css";

const Qualification = () => {
    const [ toggleState, setToggleState ] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex" 
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div 
                        className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex" 
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content qualification__content-active"
                    }
                >
                    
                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Trilogi University</h3>
                                <span className="qualification__subtitle">Major - Computer Science</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Cashlez Worldwide</h3>
                                <span className="qualification__subtitle">Full Stack Web Developer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun 2023 - Present
                                </div>
                            </div>


                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Barunawati Vocational Highschool</h3>
                                <span className="qualification__subtitle">Major - Computer and Network Engineering</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">PAM GROUP (MYPAYFAST)</h3>
                                <span className="qualification__subtitle">Full Stack Developer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> March 2022 - Jun 2023
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content qualification__content-active"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">State Junior High School 185</h3>
                                <span className="qualification__subtitle">South Jakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2014
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">PT. Sribu Digital Kreatif</h3>
                                <span className="qualification__subtitle">Back End Developer </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2022 - March 2022
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">State Elementary School 013</h3>
                                <span className="qualification__subtitle">South Jakarta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2005 - 2011
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">PT. Transtama Group</h3>
                                <span className="qualification__subtitle">Full Stack Developer </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sept 2020 - Dec 2021
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification