import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const createGallery = document.querySelector('.gallery');

const allGalleryEl = galleryItems.map(
    ({ preview, original, description }) => 
        `<a class = "gallery__item" href = "${original}">
        <img class = "gallery__image" data-source  = "${original}" src = "${preview}"
        alt = "${description}"/>
        </a>
        `
)
    .join('');

createGallery.insertAdjacentHTML('beforeend', allGalleryEl);
createGallery.addEventListener('click', createModal);

function createModal(event) { 
    event.preventDefault();

    const selectedImg = event.target.dataset.source;
    
    const instance = basicLightbox.create(
        `<img src="${selectedImg}" width='800' height='600'>`, {
            onShow: (instance) => { 
                window.addEventListener('keydown', onModalClick);
            },
            onClose: (instance) => { 
                window.removeEventListener('keydown', onModalClick);
            }

        });
    instance.show()
    
    function onModalClick(event) { 
        if (event.code === 'Escape')
            instance.close();
    };
}

  
