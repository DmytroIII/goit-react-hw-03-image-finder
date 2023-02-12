import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '30885828-3a5027e794685de5837ffa869';

export async function getImagesApi(query, page) {
  const BASE_SEARH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
    q: query,
    safesearch: true,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  console.log(response);

  return response.data;
}