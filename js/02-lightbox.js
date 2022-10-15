import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(array => {
        return `<a class="gallery__item" href="${array.preview}">
  <img class="gallery__image" src="${array.original}" alt="${array.description}" />
</a>`;

}).join('');

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });