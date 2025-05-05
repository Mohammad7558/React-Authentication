import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import banner1 from "../../assets/banner-1-min.jpg";
import banner2 from "../../assets/banner-2-min.jpg";
import banner3 from "../../assets/banner-3-min.jpg";

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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0000007b] bg-opacity-20 flex items-center justify-center">
                {/* Content */}
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
