import React from 'react'
import logo from '../images/Logo.png'
import Container from './Container'


function Header() {
  return (
    <div className="m-2">
      <Container>    
        <div class="grid grid-cols-6 gap-4 md:grid-cols-3 ">
          <div className=" items-center justify-start flex">
            <p className="text-[16px] font-semibold hidden md:block">
              +022 319 821 967
            </p>
            <div >
               <p className="md:hidden block">hamburger</p>

            </div>
          </div>

          {/* <div className='flex justify-center '>hamburger</div> */}
          <div className="col-span-4 md:col-span-1 ">
            {" "}
            <img
              src={logo}
              width="150px"
              height="50px"
              className="mx-auto"
            />{" "}
          </div>
          <div className=" items-center justify-end hidden md:flex ">
            <div className="flex justify-center items-center gap-3">
              <div className="border border-neutral-950 rounded-full p-2 w-[40px] h-[40px]">
                <p className="text-[16px] text-black">Fb</p>
              </div>
              <div className="border border-neutral-950 rounded-full p-2 w-[40px] h-[40px]">
                <p className="text-[16px] text-black">Tw</p>
              </div>
              <div className="border border-neutral-950 rounded-full p-2 w-[40px] h-[40px]">
                <p className="text-[16px] text-black">Ig</p>
              </div>
              <div className="border border-neutral-950 rounded-full p-2 w-[40px] h-[40px]">
                <p className="text-[16px] text-black">Yt</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
      
  );
}

export default Header