import React from 'react'
import Container from '../../Compoments/Container';
import SliderCard from '../../Compoments/SliderCard';

function RecommendSection() {
    const array = [1, 2, 3, 4, 6, 7, 8, 9];
  return (
    <div>
      <Container>
        <p className="md:text-[38px] text-[#333333]  xs: text-[29px] font-semibold text-left">
          Recommended for you
        </p>
        <div className="md:grid grid-cols-2 lg:grid-cols-4 xs:grid-cols-1 my-3 gap-4 gap-y-12">
          
            <SliderCard />
       
        </div>
      </Container>
    </div>
  );
}

export default RecommendSection;