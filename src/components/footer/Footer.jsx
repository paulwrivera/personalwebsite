import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hobbs</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://twitter.com/paulwrivera" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/thepaulhobbs/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/paulwrivera" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">Copyright © {new Date().getFullYear()} Paul Hobbs</span>
            </div>
        </footer>
    )
}

export default Footer