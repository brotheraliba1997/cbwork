import React from 'react'
import TextShow from './TextShow'

function Sorting(data) {
  console.log(data)
  return (
    <div>
      <div className="flex justify-between items-center">
        <TextShow
          title="Showing 1-9 Results"
          fsize="16px"
          className="text-[#9A9AB0]"
        />

        <div className="flex justify-center items-center gap-4 whitespace-nowrap my-3">
          <div>
            <TextShow title="Sort by" fsize="16px" className="text-[black]" />
          </div>
          <div className="w-[100%] flex items-center justify-between rounded-lg px-2 py-1 border-solid border-2 border-[black] ">
            <select className=" ">
              <option> Newest</option>
              <option> Oldest </option>
            </select>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sorting