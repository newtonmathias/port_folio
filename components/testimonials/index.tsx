import React from "react";
import TestimonialSwiper from "./swiper";

const Testimonials = () => {
  return (
    <div className="py-20">
      <div className="text-center pb-16 space-y-2">
        <h5 className="text-sm leading-6 text-primary-yellow ">RECENT WORK</h5>
        <h2 className="text-4xl font-semibold font-lato">
          Here are a few past projects I've worked on
        </h2>
      </div>
      <TestimonialSwiper />
    </div>
  );
};

export default Testimonials;
