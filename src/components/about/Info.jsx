import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-palette about__icon"></i>
                <h3 className="about__title">Web Design</h3>
                <span className="about__subtitle">3+ Years</span>

            </div>

            <div className="about__box">
                <i className="bx bx-code-alt about__icon"></i>
                <h3 className="about__title">Web Dev</h3>
                <span className="about__subtitle">1 Year</span>

            </div>

            <div className="about__box">
                <i className="bx bx-search-alt-2 about__icon"></i>
                <h3 className="about__title">SEO</h3>
                <span className="about__subtitle">5+ Years</span>

            </div>
        </div>
    )
}

export default Info