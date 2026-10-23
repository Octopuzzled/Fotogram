/** Thumbnails visible without scrolling on a phone; they load immediately, the rest lazily. */
const EAGER_THUMBNAILS = 6;

/**
 * Returns the HTML for one gallery thumbnail.
 * Uses the small square version from assets/img/thumbnails, not the full-size photo.
 *
 * @param {Object} img - Image object with name and alt
 * @param {number} index - Position of the image in the IMAGES array
 * @returns {string} HTML string of the thumbnail button
 */
function getThumbnailTemplate(img, index) {
  const loading = index < EAGER_THUMBNAILS ? "eager" : "lazy";
  const isFavorite = FAVORITES.includes(img.name);
  return `
        <div class="gallery-item">
        <button class="gallery-button" onclick="openDialog(${index})">
            <img class="image-thumbnail" src="./assets/img/thumbnails/${img.name}" alt="${img.alt}"
                width="150" height="150" loading="${loading}" decoding="async">
        </button>
        <button
          class="favorite-button thumbnail-favorite-button ${isFavorite ? "favorited" : ""}"
          onclick="toggleFavorite('${img.name}')"
          aria-label="Favorite: ${img.alt}"
          aria-pressed="${isFavorite}">
        </button>
      </div>`;
}

/**
 * Returns the HTML for the full-size image in the dialog.
 *
 * @param {Object} img - Image object with name and alt
 * @returns {string} HTML string of the dialog image
 */
function getDialogImageTemplate(img) {
  return `<img src="./assets/img/${img.name}" alt="${img.alt}">`;
}
