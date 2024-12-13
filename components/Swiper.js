// import Swiper core and required modules
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carrousel({ image1, image2, image3 }) {
  const images = [image1, image2, image3]; // Array de imágenes

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images
        .filter((image) => image) // Filtrar solo imágenes no nulas o definidas
        .map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} class="w-full h-full"/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};