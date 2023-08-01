import React from 'react'
import TextShow from './TextShow';
import { AiOutlineRight } from "react-icons/ai";

function Categories() {

    const array = [
      "Dresses",
      "Shirt and Top",
      "Outwears",
      "Bags",
      "Shoes",
      "Accesories",
    ];
  return (
    <div className="mt-[40px]">
      <TextShow
        title="Categories"
        fsize="24px"
        className="text-[#11142D] font-semibold text-left"
      />

      <div className="grid grid-cols-1">
        {array.map((x) => (
          <div>
            <div className="flex justify-between my-1">
              <TextShow
                title={x}
                fsize="16px"
                className="text-[#11142D] font-semibold text-left"
              />
              <span>
                <AiOutlineRight style={{ fontSize: "14px" }} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <TextShow
        title="Load more"
        fsize="16px"
        className="text-[#F3692E] font-semibold "
      />
    </div>
  );
}

export default Categories