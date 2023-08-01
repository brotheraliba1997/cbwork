import React, { useEffect, useState } from "react";
import Header from "../../Compoments/Header";
import SubHeader from "../../Compoments/SubHeader";
import MainSection from "../Home/MainSection";
import ShopSection from "../Shop/shopSection";
import Footer from "../../Compoments/Footer";
import DetailSection from "./DetailSection";
import RecommendSection from "../Shop/recommendSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../../Redux/Product/Products";
import { Getbyid } from "../../Config/apibasemethod";
import axios from "axios";

function Detail() {
  const [singleProduct, setSingleProduct] = useState();

  const params = useParams();
  const { id } = params;
  const singleDataCalling = async () => {
    await axios(`http://localhost:5000/product/${id}`)
      .then((res) => {
        console.log(res);
        setSingleProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    singleDataCalling();
  }, []);

  return (
    <div>
      {singleProduct && <DetailSection SingleProduct={singleProduct} />}
      {/* <RecommendSection /> */}
    </div>
  );
}

export default Detail;
