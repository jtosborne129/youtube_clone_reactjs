import axios from 'axios';
//import * as dotenv from 'dotenv';

//dotenv.config();

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const RapidAPIKey = process.env.REACT_APP_RAPID_API_KEY;

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': RapidAPIKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};