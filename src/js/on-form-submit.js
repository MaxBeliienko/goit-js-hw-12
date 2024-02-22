import { pixabayApi } from './pixabay-api';
import { refs } from './refs';
import { galleryMarkup } from './render';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

function hideLoader() {
  refs.load_more.classList.add('hidden');
}
function showLoader() {
  refs.load_more.classList.remove('hidden');
}

let per_page = 9;
let page;
let inputValue;

export function onFormSubmit(e) {
  e.preventDefault();
  hideLoader();
  inputValue = e.target.elements.form_input.value.trim();
  page = 1;
  refs.gallery.innerHTML = '';
  if (inputValue !== '') {
    pixabayApi(inputValue, page, per_page)
      .then(response => {
        const { data } = response;
        if (data.hits.length !== 0) {
          galleryMarkup(data);
          let rect = refs.gallery.firstChild.getBoundingClientRect().height;
          window.scrollBy({
            behavior: 'smooth',
            top: rect,
          });
          if (Math.ceil(data.totalHits / per_page) <= page) {
            iziToast.show({
              message:
                "We're sorry, but you've reached the end of search results.",
            });
          } else {
            showLoader();
          }
        } else {
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
      })
      .catch(error => console.log(error))
      .finally(refs.load_more.classList.remove('loader'));
  }
  e.target.reset();
}

export function onLoadMoreClick() {
  page += 1;
  pixabayApi(inputValue, page, per_page)
    .then(response => {
      const { data } = response;
      galleryMarkup(data);
      if (Math.ceil(data.totalHits / per_page) === page) {
        hideLoader();
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .finally(refs.load_more.classList.remove('loader'));
}
