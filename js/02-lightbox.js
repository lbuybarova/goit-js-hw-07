import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createCards(images) {
    return images.map(({preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>        
        `;
    })
        .join(' '); 
}

const cards = createCards(galleryItems);
gallery.innerHTML = cards;


const lightbox = new SimpleLightbox('.gallery a', {    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
