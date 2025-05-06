import React, { useEffect } from "react";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/'){
      window.document.title = 'Event Master'
    }
  }, [location.pathname])

  return (
    <div className="mb-10">
      <Slider />
      <UpcomingEvents />
      <WhyChooseUs />
      <Service />
    </div>
  );
};

export default Home;
