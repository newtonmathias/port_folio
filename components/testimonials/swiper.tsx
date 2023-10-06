"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { testimonials } from "@/config";

export default function TestimonialSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 0,
        }}
        speed={25000}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card className="flex flex-col items-center justify-center px-10">
              <CardHeader></CardHeader>
              <CardContent>
                <p className="font-medium text-2xl font-lato">
                  {testimonial.content}
                </p>
              </CardContent>
              <CardFooter>
                <p className="font-medium text-lg font-lustria text-dark-gray dark:text-light-gray">
                  {testimonial.name} - company
                </p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
