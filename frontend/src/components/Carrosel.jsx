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
  { id: 1, img: "../assets/unifei-campus.jpg" },
  { id: 2, img: '../assets/unifei-prg.webp', position: '100% 5%' },
  { id: 3, img: '../assets/itajuba.webp' },
];

export default function Carrosel({ style }) {
  return (
    <div className={style}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {
              <div
                className="w-full relative"
                style={{
                  height: '500px',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${item.img})`,
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
