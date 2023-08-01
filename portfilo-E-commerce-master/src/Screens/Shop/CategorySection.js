import React, { useEffect, useState } from "react";
import Tab from "../../Compoments/Tab";
import Container from "../../Compoments/Container";
import { useSelector } from "react-redux";
import SliderCard from "../../Compoments/SliderCard";

function CategorySection() {
  const [valuehandlerTab, setvaluehandlerTab] = useState("all");
  const [filterProduct, setfilterProduct] = useState([]);



  const products = useSelector((state) => state.products);  // redux
  useEffect(() => {    //filter data we do it
    let categoryfilter = products.data.filter(
      (x) => x.category === valuehandlerTab
    );
    setfilterProduct(categoryfilter);
  }, [valuehandlerTab]);

  const valueHandler = (value) => {   // value we get the value on tab Compoments 
    console.log(value);
    setvaluehandlerTab(value);
  };
  return (
    <div>
      <Tab valueHandler={valueHandler} />
      <Container>
        <div className="md:grid grid-cols-2 lg:grid-cols-4 xs:grid-cols-1 my-3 gap-4 gap-y-12">
          {
            valuehandlerTab == "all"
            ? products.data.map((x) => <SliderCard data={x}   />)
            : filterProduct.map((x, i) => <SliderCard data={x} />)
            
            }
        </div>
      </Container>
    </div>
  );
}

export default CategorySection;
