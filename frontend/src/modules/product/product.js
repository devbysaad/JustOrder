import axios from "axios"

const BASE_URL = "http://localhost:5000/api/product"

export const getProducts = async () => {
  const res = await axios.get(BASE_URL, { withCredentials: true })
  return res.data
}

export const createProduct = async (formData) => {
  const res = await axios.post(BASE_URL, formData, { withCredentials: true })
  return res.data
}
