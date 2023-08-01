import React from "react";
import Containertwo from "../../Compoments/Containertwo";
import TextParag from "../../Compoments/TextParag";
import { AiOutlineRight } from "react-icons/ai";

function ShopSection() {
  return (
    <div>
      <Containertwo>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
          <div className="mt-[110px]">
            <div className="flex items-center gap-1 ">
              <p className="text-[24px] font-semibold py-3   text-left ">
                Home{" "}
              </p>
              <span>
                <AiOutlineRight style={{ fontSize: "14px" }} />
              </span>{" "}
              <p className="text-[24px] font-semibold py-3   text-left ">
                Shop{" "}
              </p>
            </div>

            <p className="text-[48px] font-semibold text-[#11142D]  text-left ">
              Shop
            </p>
          </div>
          <div className=" md:col-span-2 ">
            <div className="flex justify-center ">
              <div className=" xs:w-[100%] md: w-[100%]   h-[400px] bg-[#E2E2EA] my-[40px]"></div>
            </div>
          </div>
        </div>
      </Containertwo>
    </div>
  );
}

export default ShopSection;
