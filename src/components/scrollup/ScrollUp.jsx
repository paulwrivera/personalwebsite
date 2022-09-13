import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to
        // an object with the scrollup class (in this case, the a on line 13).
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp