import React from 'react'

function TextParag({ title, fsize,  className }) {
  return (
    <div>
      <p className={`text-[${fsize}] ${className}`}> {title} </p>

      {/* <div className="flex justify-end ">
          <div className="w-[40px] h-[40px] bg-[#F86338] rounded-full m-4 flex justify-center items-center">
            <div className="text-[#ffffff]">
              {" "}
              <AiOutlineHeart />{" "}
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default TextParag