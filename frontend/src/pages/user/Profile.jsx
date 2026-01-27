import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        window.location.reload();
        navigate("/login");

    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

                <div className="h-36 bg-gradient-to-r from-blue-600 to-blue-500"></div>

                <div className="relative px-8 pb-8">
                    <div className="flex justify-center -mt-16">
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center shadow-md">
                            <span className="text-4xl font-bold text-white">
                                {user?.username?.charAt(0).toUpperCase() || "U"}
                            </span>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.username || "User"}</h2>
                        <p className="text-gray-500">{user?.role === "admin" ? "Administrator" : "Customer"}</p>
                        <p className="text-sm text-gray-400 mt-1">ID: {user?._id}</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-lg font-bold text-gray-800">0</p>
                            <p className="text-sm text-gray-500">Orders</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-lg font-bold text-gray-800">0</p>
                            <p className="text-sm text-gray-500">Wishlist</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-lg font-bold text-gray-800">{user?.role === "admin" ? "Admin" : "User"}</p>
                            <p className="text-sm text-gray-500">Account Type</p>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
