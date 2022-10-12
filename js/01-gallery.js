import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let string = galleryItems.map(array => {
        return `<div class="gallery__item">
    <img class="gallery__image gallery__link"
    src="${array.preview}"
    alt="${array.description}">
</div>`;
}).join('');

gallery.innerHTML = string;