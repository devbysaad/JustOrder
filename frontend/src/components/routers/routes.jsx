// import React, { useEffect, useState }E from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
// import Profile from "../pages/user/Profile";
import BuyNow from "../../pages/BuyNow";
import CreateProduct from "../../pages/admin/CreateProduct";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import { getCurrentUser } from "../api/auth";

const MainRoutes = () => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await getCurrentUser();
  //       setUser(res.user || null);
  //     } catch {
  //       setUser(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // if (loading) return <div>Loading...</div>;

  return (
    <Routes>
     
    
        <>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/checkout" element={<BuyNow />} />
          <Route path="/create-product" element={<CreateProduct/>}/>
        </>
     
    </Routes>
  );
};

export default MainRoutes;