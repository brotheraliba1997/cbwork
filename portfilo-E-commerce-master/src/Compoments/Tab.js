import React from "react";
import Container from "./Container";
import { useSelector } from "react-redux";

function Tab({ valueHandler }) {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center gap-8 h-[30px]  my-5 whitespace-nowrap   overflow-x-auto  ">
          <p
            className="text-[#9A9AB0] cursor-pointer 
            text-[16px] font-semibold
           hover:text-[#F3692E]  
             hover:border-b-4 
            hover:border-[#F3692E]"
            onClick={() => valueHandler("all")}
          >
            All
          </p>
          <p
            onClick={() => valueHandler("moblie")}
            className="text-[#9A9AB0] cursor-pointer  text-[16px] font-semibold hover:text-[#F3692E]  hover:border-b-4  hover:border-[#F3692E] "
          >
            Moblie
          </p>
          <p
            onClick={() => valueHandler("women's clothing")}
            className="text-[#9A9AB0] cursor-pointer  text-[16px] font-semibold hover:text-[#F3692E]  hover:border-b-4  hover:border-[#F3692E] "
          >
            Women's clothing
          </p>
          <p
            onClick={() => valueHandler("electronics")}
            className="text-[#9A9AB0] cursor-pointer  text-[16px] font-semibold hover:text-[#F3692E]  hover:border-b-4  hover:border-[#F3692E] "
          >
            Electronics
          </p>
          <p
            onClick={() => valueHandler("jewelery")}
            className="text-[#9A9AB0] cursor-pointer  text-[16px] font-semibold hover:text-[#F3692E]  hover:border-b-4  hover:border-[#F3692E] "
          >
            Jewelery
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Tab;
