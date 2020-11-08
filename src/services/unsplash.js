import axios from 'axios';

export const getImages = async (query, collectionId) => {
  let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.REACT_APP_ACCESS}`;

  if (collectionId) {
    url = `https://api.unsplash.com/collections/${collectionId}/photos/?query=${query}&client_id=${process.env.REACT_APP_ACCESS}`
  }

  return await axios.get(url);
}

export const getCollections = async () => {
  const url = `https://api.unsplash.com/collections/?page=${Math.floor(Math.random() * (10)) + 1}&client_id=${process.env.REACT_APP_ACCESS}`;

  return await axios.get(url);
}