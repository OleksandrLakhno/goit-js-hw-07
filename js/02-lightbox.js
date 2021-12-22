import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const createGallery = document.querySelector('.gallery');

const allGalleryEl = galleryItems.map(
    ({ preview, original, description }) => 
        `<li class = "gallery__item">
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}"
        alt = "${description}"/>
        </a></li>
        `
)
    .join('');

createGallery.insertAdjacentHTML('beforeend', allGalleryEl);

let gallery = new SimpleLightbox('.gallery a',
 {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
});