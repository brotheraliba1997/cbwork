import logo from './logo.svg';
import './App.css';
import Approuter from './Config/approuter';
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from './Redux/todo/todo';
import { useEffect, useState } from 'react';
import { localDataSave } from './Redux/Cart/CartSlice';
import Footer from './Compoments/Footer';
import Header from './Compoments/Header';
import SubHeader from './Compoments/SubHeader';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
   


    //  useEffect(() => {
    //    const storedProductData = localStorage.getItem("product");
    //    if (storedProductData) {
    //      dispatch(localDataSave(JSON.parse(storedProductData)));
    //    }
    //   }, []);

      useEffect(() => {
        localStorage.setItem("product", JSON.stringify(cart.list));   
      }, [cart]);

        useEffect(() => {
          localStorage.setItem("auth", JSON.stringify(auth.userinfo));  
        }, [auth.userinfo]);


      
      
  

 
  return (
    <BrowserRouter>
      <Approuter />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
