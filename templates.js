/**
 * Returns the HTML for one gallery thumbnail.
 *
 * @param {Object} img - Image object with name and alt
 * @param {number} index - Position of the image in the IMAGES array
 * @returns {string} HTML string of the thumbnail button
 */
function getThumbnailTemplate(img, index) {
    return `
        <button class="gallery-btn" onclick="openDialog(${index})">
            <img class="img-thumbnail" src="./assets/img/${img.name}" alt="${img.alt}">
        </button>`;
}