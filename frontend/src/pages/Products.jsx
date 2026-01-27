import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
     
        const res = await axios.get(`http://localhost:5000/api/auth/product/${id}`, { withCredentials: true });
        setProduct(res.data);
        const defaultCat = res.data.categories?.find(c => c.isDefault) || res.data.categories?.[0];
        setSelectedCategory(defaultCat);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading product...</p>;

  const inStock = selectedCategory?.stock > 0;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-4 text-blue-600 font-semibold hover:underline">
          Go Back
        </button>
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={`data:image/jpeg;base64,${product.Image}`}
              alt={product.title}
              className="rounded-xl max-h-[420px] object-contain"/>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
           
            <p className="text-gray-600 mb-5">{product.description}</p>

            {product.categories?.length > 0 && (
              <div className="mb-5">
                <p className="font-semibold mb-2">Choose Variant:</p>
                <div className="flex gap-3 flex-wrap">
                  {product.categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg border font-semibold transition ${selectedCategory?.name === cat.name
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                        }`}>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className={`mb-5 font-semibold ${inStock ? 'text-green-600' : 'text-red-600' }`}>
              {inStock
                ? `In Stock (${selectedCategory.stock} available)`
                : 'Out of Stock'}
            </p>

            <button
            onClick={()=>navigate('/checkout')}
              disabled={!inStock}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition ${inStock ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed' }`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
