import React from "react";
import TextShow from "./TextShow";
import { FcClearFilters } from "react-icons/fc";

function PriceRang() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TextShow
          title="Price"
          fsize="24px"
          className="text-[#11142D] font-semibold"
        />
        <div>
          <span>
            <FcClearFilters />
          </span>
        </div>
      </div>

      <div>
        <input
          id="default-range"
          type="range"
          //   value="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <div className="flex justify-between items-center">
        <TextShow
          title="Range"
          fsize="16px"
          className="text-[#11142D] font-semibold"
        />

        <TextShow
          title="$5-$20"
          fsize="16px"
          className="text-[#11142D] font-semibold"
        />
      </div>
    </div>
  );
}

export default PriceRang;
