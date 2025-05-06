import React from "react";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <div className="mb-10">
      <Slider />
      <UpcomingEvents />
      <WhyChooseUs />
      <Service />
      <Review/>
    </div>
  );
};

export default Home;
