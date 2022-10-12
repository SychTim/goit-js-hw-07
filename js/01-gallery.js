import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

let string = galleryItems.map(array => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${array.preview}"
            data-source="${array.original}"
            alt="${array.description}"
            />
        </a>
    </div>`;

}).join('');

gallery.innerHTML = string;

gallery.addEventListener('click', openModal);

function openModal(evt) {
    
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="600" height="800">
    `);

    instance.show();
}