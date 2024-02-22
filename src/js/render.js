import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function templateGallery(obj) {
  const template = obj.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/>
    <ul class="item-data-list">
    <li class="data-list-item">
    <h3 class="data-item-header">Likes</h3>
    <p class="data-item-text">${likes}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Views</h3>
    <p class="data-item-text">${views}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Comments</h3>
    <p class="data-item-text">${comments}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Downloads</h3>
    <p class="data-item-text">${downloads}</p>
    </li>
    </ul>
    </a>
    </li>`;
      }
    )
    .join('');
  return template;
}

export function galleryMarkup(obj) {
  const markup = templateGallery(obj);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  let gallery = new SimpleLightbox('.gallery a');
  gallery.refresh();
}
