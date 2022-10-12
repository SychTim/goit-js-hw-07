import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let string = galleryItems.map(array => {
        return `<div class="gallery__item">
    <img class="gallery__image gallery__link"
    data-source="${array.original}"
    src="${array.preview}"
    alt="${array.description}">
</div>`;
}).join('');

gallery.innerHTML = string;

gallery.addEventListener('click', openModal);

function openModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="600" height="800">
    `);

    instance.show();
}