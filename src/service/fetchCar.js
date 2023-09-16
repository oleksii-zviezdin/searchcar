import axios from 'axios';

axios.defaults.baseURL = 'https://648dc2902de8d0ea11e82f79.mockapi.io/api/v1/';

// Функція для отримання даних з бекенду
const fetchCars = async page => {
  try {
    const response = await axios.get(`search-car?page=${page}&limit=8`);
    if (response.data.length <= 0)
      throw Error(`error.message: ${response.data.length}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних з бекенду:', error);
    throw error;
  }
};

export default fetchCars;
