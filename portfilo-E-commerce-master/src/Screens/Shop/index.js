import React, { useEffect, useState } from "react";
import Header from "../../Compoments/Header";
import SubHeader from "../../Compoments/SubHeader";
import ShopSection from "./shopSection";
import Tab from "../../Compoments/Tab";
import CategorySection from "./CategorySection";
import Footer from "../../Compoments/Footer";
import RecommendSection from "./recommendSection";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../../Redux/Product/Products";

function Shop() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
 

  useEffect(() => {
    dispatch(productData());
  }, []);
  return (
    <div>
      <ShopSection />
      <CategorySection />
      {/* <RecommendSection /> */}
    </div>
  );
}

export default Shop;
