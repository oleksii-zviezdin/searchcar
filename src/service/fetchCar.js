import axios from 'axios';

axios.defaults.baseURL = 'https://648dc2902de8d0ea11e82f79.mockapi.io/api/v1/';

// Функція для отримання даних з бекенду
const fetchCars = async () => {
  try {
    const response = await axios.get('search-car');
    // Обробка отриманих даних тут (response.data)
    return response.data;
  } catch (error) {
    // Обробка помилок, якщо є
    console.error('Помилка при отриманні даних з бекенду:', error);
    throw error;
  }
};

export default fetchCars;
