import React from "react";
import { AiFillDashboard } from "react-icons/ai";    
import { BsPerson } from "react-icons/bs";    

function Dashside() {
  return (
    <div>
      <div className=" bg-[#212B35] py-[15px]  px-[25px]  min-h-[700px]">
        <p className="text-[#FF2D55] text-[18px]  font-bold  ">NAVIGATION</p>
        <div className="flex gap-2 justify-start items-center mt-2">
          <div className="text-white">
            {" "}
            <AiFillDashboard />{" "}
          </div>
          <p className="text-[#FF2D55]  text-[16px]  font-bold  ">Dashboard</p>
        </div>
        <div className="mt-[40px]">
          <p className="text-[#FF2D55] text-[18px]  font-bold  ">MANAGE</p>
        </div>

        <div>
          <div className="flex gap-2 justify-start items-center my-[15px] ">
            <div className="text-white">
              {" "}
              <BsPerson />{" "}
            </div>
            <p className="text-[#FF2D55]  text-[16px]  font-bold  ">User</p>
          </div>

          <p className="text-[#6E7985] mt-2 text-[18px]  font-bold  ">PAGES</p>
          <p className="text-[#6E7985] mt-2 ml-4 text-[16px]  font-bold  ">
            Profile
          </p>

          <p className="text-[#6E7985] mt-2 ml-4 text-[16px]  font-bold  ">
            Accounts
          </p>

          <p className="text-[#6E7985] mt-2 ml-4 text-[16px]  font-bold  ">
            Invoice
          </p>

          <p className="text-[#6E7985] mt-2  text-[16px]  font-bold  ">
            Authentication
          </p>

          <p className="text-[#6E7985] mt-2  text-[16px]  font-bold  ">
            Layouts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashside;
