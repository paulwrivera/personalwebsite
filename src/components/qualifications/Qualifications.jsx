import React, { useState } from 'react'
import "./qualifications.css";

const Qualifications = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >

                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >

                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">The Complete 2022 Web Development Bootcamp
                                </h3>
                                <span className="qualification__subtitle">App Brewery</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022
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
                                <h3 className="qualification__title">Responsive Web Design Certification</h3>
                                <span className="qualification__subtitle">freeCodeCamp</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Social Media Certification</h3>
                                <span className="qualification__subtitle">HubSpot</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021
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
                                <h3 className="qualification__title">SEO Fundamentals</h3>
                                <span className="qualification__subtitle">Semrush</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019

                                </div>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business Essentials</h3>
                                <span className="qualification__subtitle">Community College of Rhode Island</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>

                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Digital Content Marketing Specialist</h3>
                                <span className="qualification__subtitle">MetCap Management</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021-2022
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
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Self-employed</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">E-Commerce Data Specialist</h3>
                                <span className="qualification__subtitle">CME Corp.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2021
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
                                <h3 className="qualification__title">Store Manager</h3>
                                <span className="qualification__subtitle">CVS Health</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2018
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Store Manager</h3>
                                <span className="qualification__subtitle">Dollar General</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2010 - 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Qualifications