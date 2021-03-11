//Lightbox basic elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';

const lightboxFigureElement = document.createElement('figure');
const lightboxImageCaptionElement = document.createElement('figcaption');
const lightboxPictureElement = document.createElement('picture');
const lightboxImageElement = document.createElement('img');


//Appending lightbox basic elements
document.body.appendChild(lightbox).appendChild(lightboxFigureElement);
lightboxFigureElement.appendChild(lightboxPictureElement).appendChild(lightboxImageElement);
lightboxFigureElement.appendChild(lightboxImageCaptionElement);


//Lightbox control buttons
const closeBtn = document.createElement('button');
closeBtn.id = 'closeBtn';
const closeBtnIcon = document.createElement('i');
closeBtnIcon.classList.add('fas','fa-times', 'fa-lg');

const arrowRightBtn = document.createElement('button');
arrowRightBtn.id = 'arrowRightBtn';
const arrowRightBtnIcon = document.createElement('i');
arrowRightBtnIcon.classList.add('fas','fa-chevron-right', 'fa-lg');

const arrowLeftBtn = document.createElement('button');
arrowLeftBtn.id = 'arrowLeftBtn';
const arrowLeftBtnIcon = document.createElement('i');
arrowLeftBtnIcon.classList.add('fas','fa-chevron-left', 'fa-lg');


//Appending lightbox control buttons
lightbox.appendChild(closeBtn).appendChild(closeBtnIcon);
lightbox.appendChild(arrowRightBtn).appendChild(arrowRightBtnIcon);
lightbox.appendChild(arrowLeftBtn).appendChild(arrowLeftBtnIcon);


//Setting lightbox on images
const figureElements = document.querySelectorAll('.lightbox-ready');
let currentImgIndex = 0;

figureElements.forEach((figureElement, i) => {
    figureElement.addEventListener('click', () => {
        currentImgIndex = i;
        openLightbox(figureElement);
    });
});

bindLightboxControlsEvents();

function openLightbox(figureElement) {
    makeDocumentNotScrollable();
    setLightboxActive();
    updateArrowButtonsState();
    setImageCaption(figureElement);
    copyImageParameters(figureElement.querySelector("img"), lightboxImageElement);
    updateImageElementDimensions(figureElement);
}

function makeDocumentNotScrollable() {
    document.querySelector('body').style.overflow = "hidden";
}

function setLightboxActive() {
    lightbox.classList.add('active');
}

function updateArrowButtonsState() {
    if(currentImgIndex <= 0 ) {
        disableElement(arrowLeftBtn);
    }
    else if (currentImgIndex + 1 >= figureElements.length) {
        disableElement(arrowRightBtn);
    }
    else {
        enableElement(arrowLeftBtn);
        enableElement(arrowRightBtn);
    }
}

function disableElement(element) {
    if(!element.classList.contains("disabled")) {
        element.classList.add("disabled");
    }
}

function enableElement(element) {
    if(element.classList.contains("disabled")) {
        element.classList.remove("disabled")
    }
}

function setImageCaption(imageFigureElement) {
    const imageCaptionElement = imageFigureElement.querySelector("figcaption");

    if (imageCaptionElement != null) {
        lightboxImageCaptionElement.innerText = imageCaptionElement.innerText;
    }
    else {
        lightboxImageCaptionElement.innerText='';
    }
}

function copyImageParameters(fromImage, toImage) {
    toImage.src = fromImage.src;
    toImage.alt = fromImage.alt;
    toImage.srcset = fromImage.srcset;
}

function updateImageElementDimensions(imageFigureElement) {
    const lastSizeValue = getLastNumberOfSrcSet(lightboxImageElement.srcset);

    // Height of image is not possible to specify in sizes.
    // Portrait pictures have 3:2 ratio (max 85:57vh).
    if (imageFigureElement.classList.contains('portrait')) {
        lightboxImageElement.sizes = "57vh";
        lightboxImageElement.style.maxHeight = lastSizeValue * 1.5 + "px";
        lightboxImageElement.style.maxWidth = "auto";
    }
    else {
        lightboxImageElement.sizes= "(min-width: 600px) 80vw, 100vw";
        lightboxImageElement.style.maxHeight = "85vh";
        lightboxImageElement.style.maxWidth = lastSizeValue + "px";
    }
}

function getLastNumberOfSrcSet(srcSet) {
    return srcSet.split(" ").pop().slice(0, -1);
}

function bindLightboxControlsEvents() {
    arrowLeftBtn.addEventListener('click', () => {
        if (currentImgIndex > 0) {
            currentImgIndex = currentImgIndex - 1;
            openLightbox(figureElements[currentImgIndex]);
        }
    });

    arrowRightBtn.addEventListener('click', () => {
        if (currentImgIndex + 1 < figureElements.length) {
            currentImgIndex = currentImgIndex + 1;
            openLightbox(figureElements[currentImgIndex]);
        }
    });

    closeBtn.addEventListener('click', () => {
        setLightboxInactive();
        makeDocumentScrollable();
    });
}

function setLightboxInactive() {
    lightbox.classList.remove('active');
}

function makeDocumentScrollable() {
    document.querySelector('body').style.overflow = "auto";
}
