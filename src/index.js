import './sass/main.scss';
import '@fortawesome/fontawesome-free/js/all.js'; //todo later add tree-shaking
import './lightbox'


// When the user scrolls the page, execute this page
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
}



