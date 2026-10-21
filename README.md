# Fotogram

A small, responsive photo gallery built with plain HTML, CSS and JavaScript (no frameworks, no build step).

This is a learning project from my training as a **Fachinformatiker für Anwendungsentwicklung** (IT specialist for application development), completed through the Developer Akademie. It covers the basics of front-end web development: semantic HTML, CSS layout and DOM manipulation with JavaScript.

## Features

- Gallery is generated dynamically from a JavaScript array
- Images appear in random order on every page load
- Clicking a thumbnail opens it in a modal `<dialog>` with a title
- Dialog closes via the close button or a click on the backdrop
- Optimized images (≤ 500 KB each)

**In progress** 

## Getting started

No installation needed. Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/Octopuzzled/Fotogram.git
cd Fotogram
start index.html   # Windows
```

You can also use a local dev server, such as the VS Code "Live Server" extension.

## Project structure

```
Fotogram/
├── index.html        # Page structure and dialog markup
├── style.css         # Layout, colors, fonts
├── script.js         # Image data, gallery rendering, dialog logic
└── assets/
    ├── fonts/        # Figtree (woff2)
    ├── img/          # Gallery photos
    └── svg/          # Logos and navigation icons
```

## Adding a photo

1. Put the image in `assets/img/` (ideally under 500 KB).
2. Add an entry to the `images` array in `script.js`:

```js
{
    name: "my-photo.jpg",
    alt: "Short description of the photo",
},
```

## What I learned

- Structuring a page with semantic HTML5 elements
- Using the native `<dialog>` element and `showModal()`
- Generating markup from data with template literals
- Optimizing image sizes for faster loading
- Working with Git and writing meaningful commit messages

## License

Created for training purposes. Logo and footer © Developer Akademie GmbH.
