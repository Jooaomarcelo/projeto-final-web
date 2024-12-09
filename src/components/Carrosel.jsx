'use client';

// core version:
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { register } from 'swiper/element/bundle';

register();

const data = [
  { id: 1, img: '/unifei/unifei-campus.jpg' },
  { id: 2, img: '/unifei/unifei.jpg' },
  { id: 3, img: '/unifei/parque-itajuba.jpg', position: '0 40%' },
];

export default function Carrosel(props) {
  return (
    <div className="relative h-[80%]">
      {props.children}
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {
              <div
                className="h-full w-screen relative"
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: item.position ?? 'center',
                }}
              ></div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
