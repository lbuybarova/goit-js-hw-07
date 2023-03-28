import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createCards(images) {
    return images.map(({preview, original, description }) => {
        return `<div class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}">        
        </a>
        </div>`;
    })
        .join(' '); 
}

const cards = createCards(galleryItems);
gallery.innerHTML = cards;

let instance = {};

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const img = event.target.dataset.source;        
    createInstance(img);    
})
  
function createInstance(img) {
     instance = basicLightbox.create(`
            <img src="${img}">`,
        {
            onShow: () => {
                
                document.addEventListener(('keydown'), modalClose)
            },
            onClose: () => {
                
                document.removeEventListener(('keydown'), modalClose)
            }
        });
    
    instance.show();
}

function modalClose(event) {
    
    if (event.code === 'Escape') {
        
        return instance.close();        
        }
    }