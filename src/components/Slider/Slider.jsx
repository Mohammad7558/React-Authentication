import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../assets/banner-1-min-min.jpg";
import banner2 from "../../assets/banner-2-min-min.jpg";
import banner3 from "../../assets/banner-3-min-min.jpg";

const slides = [
  {
    image: banner1,
    title: "Make Every Moment Memorable",
    subtitle: "Event Planning & Management Services",
  },
  {
    image: banner2,
    title: "Your Dream Event, Our Expertise",
    subtitle: "Weddings, Concerts, Corporate Events & More",
  },
  {
    image: banner3,
    title: "Flawless Events from Start to Finish",
    subtitle: "We Handle Everything with Perfection",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[60vh] lg:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center will-change-transform">
                <div className="text-center px-4 text-white max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl drop-shadow-sm">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
