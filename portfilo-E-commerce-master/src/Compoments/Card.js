import React from "react";
import Container from "./Container";
import TextParag from "./TextParag";

function Card() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA] my-[40px] flex flex-col justify-center p-4 ">
            <TextParag
              title="Dress"
              fsize="48px"
              className="font-semibold text-[#11142D] py-4 text-left "
            />
            <TextParag
              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              fsize="16px"
              className="font-semibold text-[#11142D] py-4 text-left"
            />

            <div className="flex justify-start">
              <button className="text-[16px] flex justify-center items-center w-[40px] mt-4 h-[40px] font-semibold bg-[#F86338] p-3 text-[white] rounded-full">
                ?
              </button>
            </div>
          </div>
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA] my-[40px] flex flex-col justify-end p-4 "></div>
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA] my-[40px] flex flex-col justify-end p-4 "></div>
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA]  flex flex-col justify-end p-4 "></div>
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA]  flex flex-col justify-end p-4 "></div>
          <div className=" xs:w-[100%]  md: w-[100%] h-[560px] bg-[#E2E2EA] flex flex-col justify-end p-4 "></div>
        </div>
      </Container>
    </div>
  );
}

export default Card;
