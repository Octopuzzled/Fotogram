// todo: smaller images! and different file maybe
let images = [
    {
        name: "candle.jpg",
        alt: "Eine brennende Kerze im Dunkeln",
    },
    {
        name: "cat.jpg",
        alt: "Eine niedliche Katze",
    },
    {
        name: "catania.jpg",
        alt: "Blick auf die Stadt Catania",
    },
    {
        name: "city.jpg",
        alt: "Eine nächtliche Stadtansicht",
    },
    {
        name: "clouds.jpg",
        alt: "Malerische Wolken am Himmel",
    },
    {
        name: "geese.jpg",
        alt: "Eine Gruppe von Gänsen",
    },
    {
        name: "jplenio-nature.jpg",
        alt: "Schöne Naturlandschaft",
    },
    {
        name: "lights.jpg",
        alt: "Bunte Lichter im Hintergrund",
    },
    {
        name: "octopus.jpg",
        alt: "Ein Oktopus unter Wasser",
    },
    {
        name: "phydc-oak.jpg",
        alt: "Ein großer Eichenbaum",
    },
    {
        name: "puma.jpg",
        alt: "Ein geschmeidiger Puma",
    },
    {
        name: "shogun-nature.jpg",
        alt: "Naturaufnahme",
    },
    {
        name: "witch-hazel.jpg",
        alt: "Zaubernuss-Pflanze im Detail",
    },
    {
        name: "wolf.jpg",
        alt: "Ein aufmerksamer Wolf",
    },
];

const IMAGES = images.sort(() => Math.random() - 0.5);
const PHOTOS_REF = document.getElementById("photos");
const DIALOG_REF = document.getElementById("imgDialog");
const DIALOG_IMG_REF = document.getElementById("dialogImg");
const DIALOG_TITLE_REF = document.getElementById("dialogTitle");
const DIALOG_COUNTER_REF = document.getElementById("dialogCounter");
const DIALOG_FOOTER_REF = document.getElementById("dialogFooter");

let currentIndex = 0;

/**
 * Initializes the page. Called by the onload attribute of <body>.
 */
function init() {
    renderGallery();
}

/**
 * Renders a clickable thumbnail for every picture in IMAGES.
 * Each thumbnail opens the dialog at its own index.
 */
function renderGallery() {
    PHOTOS_REF.innerHTML = ""; //clear content

    IMAGES.forEach((img, index) => {
        PHOTOS_REF.innerHTML += `<button class="gallery-btn" onclick="openDialog(${index})">
                <img id="${index}" class="img-thumbnail" src="./assets/img/${img.name}" alt="${img.alt}">
            </button>`;
    });
}

/**
 * Opens the dialog showing the picture at the given index
 * and remembers it as the current picture for navigation.
 * @param {number} index - Position of the picture in IMAGES array
 */
function openDialog(index) {
    currentIndex = index;
    showDialogPicture(index);
    DIALOG_REF.showModal();
}

/**
 * Closes the dialog
 */
function closeDialog() {
    DIALOG_REF.close();
}

/**
 * Closes the dialog when the backdrop is clicked.
 * A click on the backdrop targets the <dialog> itself, while clicks on
 * its content (image, buttons) target those child elements instead.
 * @param {MouseEvent} event - Click event from the dialog
 */
function closeOnBackdrop(event) {
    if (event.target === DIALOG_REF) {
        closeDialog();
    }
}

/**
 * Fills the dialog with the picture at the given index: image, alt text,
 * title and counter (e.g. "3 / 14").
 * @param {number} index - Position of the picture in IMAGES array
 */
function showDialogPicture(index) {
    DIALOG_IMG_REF.src = `./assets/img/${IMAGES[index].name}`;
    DIALOG_IMG_REF.alt = IMAGES[index].alt;
    DIALOG_TITLE_REF.textContent = IMAGES[index].alt;
    DIALOG_COUNTER_REF.innerText = `${currentIndex + 1} / ${IMAGES.length}`;
}

/**
 * Shows the next picture in the dialog.
 * After the last picture it wraps around to the first one.
 */
function forwards() {
    currentIndex = (currentIndex + 1) % IMAGES.length; 
    showDialogPicture(currentIndex);
}

/**
 * Shows the previous picture in the dialog.
 * Before the first picture it wraps around to the last one.
 * Adding IMAGES.length avoids a negative index (-1 % n stays -1 in JS).
 */
function backwards() {
    currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    showDialogPicture(currentIndex);
}
