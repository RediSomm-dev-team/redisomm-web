import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Carousel = (): JSX.Element => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='/images/redisomm-keyspace-med.gif'/> </SwiperSlide>
      <SwiperSlide><img src='/images/redisomm-usage-med.gif'/></SwiperSlide>
    
    </Swiper>
  );
};

export default Carousel;