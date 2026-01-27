import axios from 'axios'
import { loadProduct } from '../reducer/productSlice'

const BACKEND_URI = "http://localhost:5000/api/product";


export const asynLoadProduct=()=>async (dispatch)=>{
try {
    const res = await axios.get(BACKEND_URI)
    dispatch(loadProduct(res.data))
} catch (error) {
    console.log(error);
    
}
}

export const createProduct = (product) => async (dispatch) => {
    try {
        await axios.post(BACKEND_URI)
      dispatch(asyncLoadProduct());
    } catch (error) {
      console.log(error);
    }
  };
  