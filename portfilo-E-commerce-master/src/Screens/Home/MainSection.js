import React from 'react'
import TextParag from '../../Compoments/TextParag';
import Container from '../../Compoments/Container';
import Containertwo from '../../Compoments/Containertwo';



function MainSection() {
  return (
    <>
      <Containertwo>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
          <div className="mt-[90px]">
            <TextParag
              title="Sort out Your Spring Look"
              fsize="48px"
              className="font-semibold m-0 leading-[3rem] text-left"
            />
            <TextParag
              title="We will help to develop every smallest thing into a big one for your company."
              fsize="16px"
              className="font-semibold text-[#9A9AB0] py-4 text-left"
            />
            <div className="flex  justify-start">
              <button className="text-[16px] font-semibold bg-[#F86338] p-3 text-[white] rounded-lg">
                Shop ?
              </button>
            </div>
          </div>

          <div className=" ">
            <div className="flex justify-center gap-3">
              <div className=" xs:w-[100%] md: w-[70%]   h-[619px] bg-[#E2E2EA] my-[40px]"></div>
              <div className=" xs:w-[100%] md: w-[30%]   h-[619px] bg-[#E2E2EA] my-[40px]"></div>
            </div>
          </div>
        </div>
      </Containertwo>
    </>
  );
}

export default MainSection