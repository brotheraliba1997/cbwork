import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";


function AdminMenu() {
  return (
    <div className="bg-[#E2E2EA] p-[15px] min-h-[700px]">
      <p className="text-[22px] text-[black] font-bold">User List</p>

      <div className="bg-[white] border-2 rounded-lg p-[15px] ">
        <div className="flex justify-between items-center">
          <div className="border-[#E2E2EA] border-2 rounded-lg  flex  ">
            <div className="flex justify-center items-center text-[gray] min-w-[40px]">
              <BsSearch />
            </div>
            <input className=" bg-[white] text-white h-[35px]" />
          </div>
          <button className="p-2 bg-[#ff2d55] font-semibold rounded-md text-[white]">
            {" "}
            + Add User
          </button>
        </div>
        <div className="my-5">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Full name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Verification
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Hamza Ali
                  </th>
                  <td class="px-6 py-4">000103</td>
                  <td class="px-6 py-4">Hamzaali1997.h@gmail.com</td>
                  <td class="px-6 py-4">03472919116</td>
                  <td class="px-6 py-4">User</td>
                  <td class="px-6 py-4  text-red-600 ">
                    <p className="bg-red-400 px-2  rounded-sm   text-center text-yellow-50">
                      Not Verified
                    </p>
                  </td>
                  <td class="px-6 py-4   ">
                    <div className="flex justify-center gap-2">
                      <div>
                        {" "}
                        <BiEdit />{" "}
                      </div>
                      <div>
                        {" "}
                        <RiDeleteBin6Line />{" "}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
