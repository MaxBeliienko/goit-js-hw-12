import { refs } from './js/refs';
import { onFormSubmit } from './js/on-form-submit';
import { onLoadMoreClick } from './js/on-form-submit';
refs.form.addEventListener('submit', onFormSubmit);
refs.load_more.addEventListener('click', onLoadMoreClick);
