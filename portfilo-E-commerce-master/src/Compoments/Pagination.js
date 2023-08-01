import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import TextShow from "./TextShow";

function Pagination() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div className="flex justify-start items-center my-3 gap-3 w-fit mx-auto">
        <div>
          <AiOutlineDoubleLeft style={{ color: "#E0E0E0" }} />
        </div>
        <div>
          <AiOutlineLeft style={{ color: "#E0E0E0" }} />
        </div>

        {array.map((x) => (
          <div className="w-[32px] h-[32px] rounded-full hover:bg-[#F86338] flex justify-center items-center">
            <TextShow
              title={x}
              fsize="16px"
              className="hover:text-[white]  text-[gray]"
            />
          </div>
        ))}

        <div>
            ...
        </div>


        <div>
          <AiOutlineDoubleRight style={{ color: "#E0E0E0" }} />
        </div>
        <div>
          <AiOutlineRight style={{ color: "#E0E0E0" }} />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
