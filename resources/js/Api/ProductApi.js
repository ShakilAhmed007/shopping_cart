import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';
// const data = 'hello world';
export default {
  getProducts: () => axios.get(`${BASE_URL}/`),
  addToCart: (cartItems) => axios.post(`${BASE_URL}/add-to-cart/`, {data: cartItems})


}
