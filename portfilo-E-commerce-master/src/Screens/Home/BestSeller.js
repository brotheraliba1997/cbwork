import React from 'react'
import Container from '../../Compoments/Container';
import SliderCard from '../../Compoments/SliderCard';

function BestSeller() {
  return (
    <div>
      <Container>
        <div className="mt-[60px]">
          <p className="text-[24px] text-left font-semibold ">Best Seller</p>
          <div className='grid sm: grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 '>
            {/* <div> <SliderCard/> </div>
            <div> <SliderCard/> </div>
            <div> <SliderCard/> </div>
            <div> <SliderCard/> </div> */}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default BestSeller