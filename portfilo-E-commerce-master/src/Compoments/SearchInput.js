import React from 'react'
import { BiSearch } from "react-icons/bi";



function SearchInput() {
  return (
    <div>
      <div className="w-[100%] p-3 border-[#F3692E] border-solid border-2 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products"
          className="border-none w-[100%]"
        />
        <div>
          <BiSearch style={{ color: "#9A9AB0", fontSize: "24px" }} />
        </div>
      </div>
    </div>
  );
}

export default SearchInput