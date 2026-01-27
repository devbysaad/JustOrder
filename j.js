import axios from "axios";
import { loadProduct } from "../reducers/productSlice";

const API = "http://localhost:5000/api/product";

// Load all products
export const asyncloadProduct = () => async (dispatch) => {
  try {
    const res = await axios.get(API, { withCredentials: true });
    dispatch(loadProduct(res.data));
  } catch (error) {
    console.log(error);
  }
};

// Create product
export const createProduct = (product) => async (dispatch) => {
  try {
    await axios.post(API, product, { withCredentials: true });
    dispatch(asyncloadProduct());
  } catch (error) {
    console.log(error);
  }
};
