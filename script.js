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
        name: "clouds.png",
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

function init() {
    renderGallery();
}

function renderGallery() {
    PHOTOS_REF.innerHTML = "";

    IMAGES.forEach((img, index) => {
        PHOTOS_REF.innerHTML += `<button class="gallery-btn" onclick="openDialog(${index})">
                <img id="${index}" class="img-thumbnail" src="./assets/img/${img.name}" alt="${img.alt}">
            </button>`;
    });
}

function openDialog(index) {
    showDialogPicture(index);
    DIALOG_REF.showModal();
}

function closeDialog() {
    DIALOG_REF.close();
}

function showDialogPicture(index) {
    DIALOG_IMG_REF.src = `./assets/img/${IMAGES[index].name}`;
    DIALOG_IMG_REF.alt = IMAGES[index].alt;
    DIALOG_TITLE_REF.textContent = IMAGES[index].alt;
}
