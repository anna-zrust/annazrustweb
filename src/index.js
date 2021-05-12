import './sass/main.scss';
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlane, faPizzaSlice, faArrowRight, faUtensils, faTimes, faChevronRight, faChevronLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './lightbox'

library.add(faHome, faPlane, faPizzaSlice, faArrowRight, faUtensils, faTwitter, faInstagram, faLinkedinIn, faTimes, faChevronRight, faChevronLeft, faClock );
dom.i2svg();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

module.hot.accept();


/*// When the user scrolls the page, execute this page
window.onscroll = () => {mainNavigationSticky()};

// Get the header
const mainNavigationElement = document.getElementById("mainNav");
let mainNavOffset = mainNavigationElement.offsetTop;
function mainNavigationSticky() {
    if (window.pageYOffset > mainNavOffset) {
        mainNavigationElement.classList.add("sticky");
    } else {
        mainNavigationElement.classList.remove("sticky");
    }
}


const bodyElement = document.querySelector("body");
const theme1Element = document.getElementById("theme1Toggle");
const theme2Element = document.getElementById("theme2Toggle");
const theme3Element = document.getElementById("theme3Toggle");
const toggleList = [theme1Element, theme2Element, theme3Element];

toggleList.forEach(toggle => {
    if(typeof toggle !== "undefined" && toggle !== null) {
        toggle.addEventListener('click', () => {
            switch (toggle.id) {
                case "theme1Toggle":
                    setThemeClassOnBody("theme-1");
                    break;
                case "theme2Toggle":
                    setThemeClassOnBody("theme-2");
                    break;
                case "theme3Toggle":
                    setThemeClassOnBody("theme-3");
                    break;
            }
        });
    }
});

function setThemeClassOnBody(themeClass) {
    removePreviousThemeClassOnBody();
    bodyElement.classList.add(themeClass);
}

function removePreviousThemeClassOnBody() {
    if(bodyElement.classList.contains("theme-1")) {
        bodyElement.classList.remove("theme-1");
    } else if (bodyElement.classList.contains("theme-2")) {
        bodyElement.classList.remove("theme-2");
    } else if (bodyElement.classList.contains("theme-3")) {
        bodyElement.classList.remove("theme-3");
    }
}*/



