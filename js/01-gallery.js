import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = [...galleryItems]
  .map(image => {
    const imageSmall = image.preview;
    const imageLarge = image.original;
    const description = image.description;
    return `<div class="gallery__item">
            <a class="gallery__link" href="${imageLarge}">
                <img
                class="gallery__image"
                src="${imageSmall}"
                data-source="${imageLarge}"
                alt="${description}"
                />
            </a>
        </div>`;
  })
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', selectImage);

function selectImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  showImage(e.target.getAttribute(['data-source']));
}

function showImage(image) {
  const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
  `);

  instance.show();
}
