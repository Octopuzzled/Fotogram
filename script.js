/**
 * Gallery images.
 * Update this for every new picture.
 * Keep the alt tags short because they also represent the title.
 * The order is shuffled once in init().
 * @type {{name: string, alt: string}[]}
 */
const IMAGES = [
  {
    name: "candle.jpg",
    alt: "A burning candle and herbs",
  },
  {
    name: "cat.jpg",
    alt: "A cute black cat laying on a stony floor",
  },
  {
    name: "catania.jpg",
    alt: "View of the city of Catania",
  },
  {
    name: "city.jpg",
    alt: "A city view at night, drawn image",
  },
  {
    name: "clouds.jpg",
    alt: "Picturesque dark clouds in the sky",
  },
  {
    name: "geese.jpg",
    alt: "A group of geese in water",
  },
  {
    name: "lake-rocky-island.jpg",
    alt: "A landscape with a lake and a small rocky island",
  },
  {
    name: "lights.jpg",
    alt: "Colorful lights in the background of a city",
  },
  {
    name: "octopus.jpg",
    alt: "An octopus under water",
  },
  {
    name: "orange-oak-leaves.jpg",
    alt: "Orange oak tree leaves",
  },
  {
    name: "puma.jpg",
    alt: "A sleek puma",
  },
  {
    name: "misty-autumn-lake.jpg",
    alt: "A nature shot of a misty lake in an autumnal forest",
  },
  {
    name: "witch-hazel.jpg",
    alt: "Close-up of a witch hazel plant",
  },
  {
    name: "wolf.jpg",
    alt: "An attentive wolf lying down",
  },
];

/**
 * Offset for the random sort comparator. Subtracting it from Math.random()
 * gives a value between -0.5 and 0.5, so the order is shuffled randomly.
 * @type {number}
 */
const SHUFFLE_MIDPOINT = 0.5;
const FAVORITES_KEY = "fotogram-favorites";
const FAVORITES = loadFavorites();

const PHOTOS_REF = document.getElementById("photos");
const DIALOG_REF = document.getElementById("imgDialog");
const DIALOG_IMAGE_REF = document.getElementById("dialogImage");
const DIALOG_TITLE_REF = document.getElementById("dialogTitle");
const DIALOG_COUNTER_REF = document.getElementById("dialogCounter");
const FAVORITE_BUTTON_REF = document.getElementById("dialogFavoriteButton");
const SHOW_ALL_REF = document.getElementById("showAll");
const SHOW_FAVORITES_REF = document.getElementById("showFavorites");

let currentIndex = 0;
let favoritesOnly = false;

/**
 * Initializes the page. Called by the onload attribute of <body>.
 * Shuffles the images (sort() changes the array in place), then renders the gallery.
 */
function init() {
  IMAGES.sort(() => Math.random() - SHUFFLE_MIDPOINT);
  renderGallery();
}

/**
 * Renders a clickable thumbnail for every picture in IMAGES.
 * Each thumbnail opens the dialog at its own index.
 */
function renderGallery() {
  const visibleImages = getVisibleImages();
  let html = "";

  visibleImages.forEach((img, index) => {
    html += getThumbnailTemplate(img, index);
  });

  PHOTOS_REF.innerHTML = html;
}

/**
 * Opens the dialog showing the picture at the given index
 * and remembers it as the current picture for navigation.
 * @param {number} index - Position of the picture in IMAGES array
 */
function openDialog(index) {
  dialogImages = getVisibleImages();
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
  DIALOG_IMAGE_REF.innerHTML = getDialogImageTemplate(dialogImages[index]);
  DIALOG_TITLE_REF.textContent = dialogImages[index].alt;
  DIALOG_COUNTER_REF.textContent = `${index + 1} / ${dialogImages.length}`;
  toggleHeart();
}

/**
 * Shows the next picture in the dialog.
 * After the last picture it wraps around to the first one.
 */
function forwards() {
  currentIndex = (currentIndex + 1) % dialogImages.length;
  showDialogPicture(currentIndex);
}

/**
 * Shows the previous picture in the dialog.
 * Before the first picture it wraps around to the last one.
 * Adding IMAGES.length avoids a negative index (-1 % n stays -1 in JS).
 */
function backwards() {
  currentIndex = (currentIndex - 1 + dialogImages.length) % dialogImages.length;
  showDialogPicture(currentIndex);
}


function loadFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(FAVORITES));
}

function toggleHeart() {
  const isFavorite = FAVORITES.includes(dialogImages[currentIndex].name);
  FAVORITE_BUTTON_REF.classList.toggle("favorited", isFavorite);
  FAVORITE_BUTTON_REF.setAttribute("aria-pressed", isFavorite);
}

function toggleFavorite(imgName) {
  const position = FAVORITES.indexOf(imgName);

  if (position === -1) {
    FAVORITES.push(imgName);
  } else {
    FAVORITES.splice(position, 1);
  }
  saveFavorites();
  renderGallery();
  toggleHeart();
}

function getVisibleImages() {
  if (favoritesOnly) {
    return IMAGES.filter((img) => FAVORITES.includes(img.name));
  }
  return IMAGES;
}

function setFilter(showFavorites) {
  favoritesOnly = showFavorites;
  SHOW_FAVORITES_REF.classList.add("active");
  SHOW_FAVORITES_REF.setAttribute("aria-pressed", true);
  SHOW_ALL_REF.classList.remove("active");
  SHOW_ALL_REF.setAttribute("aria-pressed", false);
  renderGallery();
}