import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';
export default {
  getProducts: () => axios.get(`${BASE_URL}/`),
  addToCart: (cartItems) => axios.post(`${BASE_URL}/add-to-cart/`, {data: cartItems}),
  getCountCartItems: () => axios.get(`${BASE_URL}/count-cart-items`),
  getCartItems: () => axios.get(`${BASE_URL}/cart-items`),

  setCartItemIncrement: (quantitie, id) => axios.put(`${BASE_URL}/cart-item-dcrement/`, { quantitie: quantitie, id:id }),

  
}
