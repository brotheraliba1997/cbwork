import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import TextParag from "./TextParag";
import { Navigate, useNavigate } from "react-router-dom";
function SliderCard({ className, data }) {

  const navigate = useNavigate()

  const ProductClickHandler  = (id) => {
    navigate(`/detail/${id}`);
  };

  
  return (
    <div
      className="shadow-lg p-3"
      onClick={() => ProductClickHandler(data._id)}
    >
      <div className={`w-[100%] h-[259px]  ${className} `}>
        <div className="flex justify-center items-center h-full">
          <img src={data?.image} className="h-full" />
        </div>
      </div>

      <p className="text-[22px] font-semibold pt-[20px] text-[#11142D] text-center">
        {data.category}
      </p>
      <p className="text-[14px] min-h-[15%] pt-[10px] font-semibold text-[#11142D] text-center">
        {data.title}
      </p>

      <p className="text-[22px] my-3 font-semibold text-[#F3692E] text-center">
        ${data.price}
      </p>
    </div>
  );
}

export default SliderCard;
