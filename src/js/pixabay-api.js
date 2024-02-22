import axios from 'axios';
import { refs } from './refs';

export async function pixabayApi(textFromUser, page, per_page) {
  refs.load_more.classList.add('loader');
  const API_KEY = '42331479-49dc52f8d5778d01c5913f31a';
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: textFromUser,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page,
      page,
    },
  });
}
