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
  return `
        <button class="gallery-btn" onclick="openDialog(${index})">
            <img class="img-thumbnail" src="./assets/img/thumbnails/${img.name}" alt="${img.alt}"
                width="150" height="150" loading="${loading}" decoding="async">
        </button>`;
}
