import React from 'react';
import "./portfolio.css";
import { projects } from "./data";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">A few of my favorite projectes.</span>
            <div className="portfolio__container container grid">

                {projects.map((project) => (
                    <div key={project.id} className="portfolio__content">
                        <div className="portfolio__box">
                            <a
                                href={project.link}
                                className="portfolio__link">
                                <div className="portfolio__group">
                                    <img
                                        alt="gallery"
                                        className="portfolio__img"
                                        src={project.image}
                                    />
                                    <div className="portfolio__text-section">
                                        <h1 className="portfolio__title">
                                            {project.title}
                                        </h1>
                                        <h2 className="portfolio__subtitle">
                                            {project.subtitle}
                                        </h2>

                                        <p className="portfolio__text">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Portfolio