import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../modules/product/product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            
                const data = await getProducts();
                setProducts(data);
        };
        fetchProducts();
    }, []);

    if (products.length === 0) {
        return <p className="text-center mt-10">Loading products...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto flex flex-col gap-4">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition cursor-pointer"
                        onClick={() => navigate(`/product/${product._id}`)}>
                        <img
                            src={`data:image/jpeg;base64,${product.Image}`} 
                            alt={product.title}
                            className="w-24 h-24 rounded-lg object-cover flex-shrink-0"/>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                         
                            <p className="text-gray-600 text-sm">{product.Category}</p>
                        </div>
                        <button
                            className={`px-4 py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600`}>
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
