import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
    </a>
    </div>`;
    })
    .join("");
}

const gallery = document.querySelector(".gallery");

const galleryItemMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryItemMarkup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const bigImageUrl = event.target.dataset.source;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  createInstanceImg(bigImageUrl);
});

let instance = {};
function createInstanceImg(bigImageUrl) {
  instance = basicLightbox.create(
    ` <img src="${bigImageUrl}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", modalClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", modalClose);
      },
    }
  );

  instance.show();
}

function modalClose(event) {
  if (event.code === "Escape") {
    return instance.close();
  }
}
