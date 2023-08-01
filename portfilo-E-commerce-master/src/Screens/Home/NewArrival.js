import React from 'react'
import TextParag from '../../Compoments/TextParag';
import Container from '../../Compoments/Container';
import SliderCard from '../../Compoments/SliderCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function NewArrival() {

    
  return (
    <div className="mt-[40px]">
      <Container>
        <div className="flex justify-between items-center">
          <TextParag
            title="New Arrival"
            fsize="48px"
            className="font-semibold"
          />
          <TextParag
            title="See All"
            fsize="24px"
            className="font-semibold text-[#F86338]"
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiper")}
          navigation
          scrollbar={{ draggable: true }}
          // cssMode={true}
          autoplay={{
            delay: 8000,
            duration: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              //   slidesPerGroup: 20,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.5,
              //   slidesPerGroup: 20,
              spaceBetween: 10,
            },
            580: {
              slidesPerView: 2,
              //   slidesPerGroup: 20,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              //   slidesPerGroup: 20,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 20,
              spaceBetween: 20,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={false}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            {" "}
            <SliderCard />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default NewArrival