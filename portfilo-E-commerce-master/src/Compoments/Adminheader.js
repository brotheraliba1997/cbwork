import React from 'react'
import { BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";

function Adminheader() {
  return (
    <div>
      <div className="bg-[#151C24] w-[100%] p-[15px] flex justify-between items-center">
        <p className="text-[18px] text-white font-semibold">Products</p>
        <div className="flex justify-between items-center gap-5">
          <div className="border-[#E2E2EA] border-2 rounded-lg bg-gray-700 flex  ">
            <input className=" bg-[#E2E2EA] text-white h-[35px]" />
            <div className="flex justify-center items-center text-white min-w-[40px]">
              <BsSearch />
            </div>
          </div>

          <div className="text-[30px] text-[#E2E2EA]">
            <MdOutlineNotificationsNone />
          </div>

          <div>
            <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp" className='object-cover h-[35px] w-[35px] rounded-[50%]'/>
          </div>
          <p className='text-white font-semibold'>Hamza ali</p>
          <div className='text-white'>
            <AiOutlineCaretDown/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminheader