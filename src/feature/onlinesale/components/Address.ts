import axios from 'axios';

const API_ENDPOINT = 'https://provinces.open-api.vn/api/';

export async function ward(code: number) {
  const API_WARD = `https://provinces.open-api.vn/api/d/118?depth=2`;
  try {
    const response = await axios.get(`${API_WARD}`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function district(code: number) {
  const API_DISTRICT = `https://provinces.open-api.vn/api/p/${code}?depth=2`;
  try {
    const response = await axios.get(`${API_DISTRICT}`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function province() {
  try {
    const response = await axios.get(`${API_ENDPOINT}`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
