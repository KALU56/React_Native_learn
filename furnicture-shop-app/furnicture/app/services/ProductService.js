// services/productService.jsx
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export default {
  getProducts,
  addProduct,
};
