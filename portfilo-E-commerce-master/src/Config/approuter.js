import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "../Screens/Home";
import Detail from "../Screens/Detail";
import Shop from "../Screens/Shop";
import Shopfilter from "../Screens/Shopfilter";
import Cart from "../Screens/Cart";
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register.js/Register";
import CheckOut from "../Screens/Cart/CheckOut";
import Header from "../Compoments/Header";
import SubHeader from "../Compoments/SubHeader";
import Footer from "../Compoments/Footer";
import Shipping from "../Screens/Shipping";
import Successfullorder from "../Screens/Successfullorder";
import Adminpanel from "../Screens/adminPanel";

function Approuter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="shopfilter" element={<Shopfilter />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
        <Route path="Shipping" element={<Shipping />}></Route>
        <Route path="ordersuccess" element={<Successfullorder />}></Route>
      </Route>
      <Route path="/admin" element={<Adminpanel />}></Route>
    </Routes>
  );
}

function AppLayout() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Approuter;
