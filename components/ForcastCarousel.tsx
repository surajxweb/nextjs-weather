"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./ForcastCarousel.module.css";
import Link from "next/link";

interface Movie {
  title: string;
  poster_path: string;
  name: string;
  id: number;
}

interface ForcastCarouselProps {
  forcastData: any;
}

const ForcastCarousel: React.FC<ForcastCarouselProps> = ({ forcastData }) => {
  const [slidesToShow, setSlidesToShow] = useState(2.01);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setSlidesToShow(5.01); // Show 6 items on larger mobile screens (adjust the breakpoint as needed)
      } else {
        setSlidesToShow(2.01); // Show 2 items by default
      }
    };

    // Initial call to set slidesToShow on component mount
    updateSlidesToShow();

    // Listen for window resize events to update slidesToShow
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    swipeToSlide: true,
    slidesToShow: slidesToShow,
  };

  return (
    <div className={styles.container}>
      <h2>Hourly Forcast</h2>

      <Slider className={styles.slider} {...settings}>
        {forcastData?.map((data: any, i: number) => (
          <div className={styles.forcastCard} key={data.timestamp_local}>
            <div className={styles.icon}>
              <Image
                src={`https://cdn.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
                alt={data?.weather?.description}
                height={100}
                width={100}
              />
            </div>
            <div className={styles.datetime}>
              {new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }).format(new Date(data.timestamp_local))}
            </div>
            <div className={styles.maintemp}>{data?.temp}&deg;C</div>
            {/* <div>{i}</div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ForcastCarousel;
