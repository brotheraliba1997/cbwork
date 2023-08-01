import React from 'react'
import Container from './Container'
import logoWhite from "../images/logoWhite.png";



function Footer() {
  return (
    <div className="bg-[#F86338]">
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
          <div className="col-span-2">
            <img src={logoWhite} />
            <p className="text-[16px] text-[#FFFFFF] text-left">
              OurStudio is a digital agency UI / UX Design and Website <br></br>
              Development located in Ohio, United States of America
            </p>

            <p className="text-[16px] mt-[40px] text-[#FFFFFF] text-left">
              Copyright Tanah Air Studio
            </p>
          </div>

          <div className="mt-[90px]">
            <p className="text-[16px] text-[#FFFFFF] text-left font-semibold">
              Our Social Media
            </p>

            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Facebook
            </p>
            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Twitter
            </p>
            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Instagram
            </p>

            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Youtube
            </p>
          </div>

          <div className="mt-[90px]">
            <p className="text-[16px] text-[#FFFFFF] text-left font-semibold">
              Contact
            </p>

            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Facebook
            </p>
            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Twitter
            </p>
            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Instagram
            </p>

            <p className="text-[16px] mt-[10px] text-[#FFFFFF] text-left">
              Youtube
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer