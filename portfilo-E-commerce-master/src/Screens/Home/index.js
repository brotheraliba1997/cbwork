import React from "react";
import Header from "../../Compoments/Header";
import MainSection from "./MainSection";
import Card from "../../Compoments/Card";
import NewArrival from "./NewArrival";
import BestSeller from "./BestSeller";
import Footer from "../../Compoments/Footer";
import SubHeader from "../../Compoments/SubHeader";
import { fetchData } from "../../Redux/todo/todo";
import { useDispatch } from "react-redux";

function Home() {
   const dispatch = useDispatch();
  return (
    <div className="">
      <MainSection />
      <Card />
      {/* <NewArrival /> */}
      <BestSeller />

    </div>
  );
}

export default Home;
