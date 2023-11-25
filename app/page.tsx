"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import InputForm from "../components/InputForm";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import { IoRainySharp } from "react-icons/io5";
import { SiWindicss } from "react-icons/si";
import { MdVisibility } from "react-icons/md";
import ForcastCarousel from "@/components/ForcastCarousel";
import HourlyForcast from "@/components/HourlyForcast";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [forcastData, setForcastData] = useState<any[]>([]);

  console.log("ye lo weather data: ", weatherData);
  console.log("ye lo forcast data: ", forcastData);

  const feelsLikeEmojie =
    weatherData[0]?.app_temp > 40
      ? "🔥"
      : weatherData[0]?.app_temp > 30
        ? "🥵"
        : weatherData[0]?.app_temp > 25
          ? "😅"
          : weatherData[0]?.app_temp > 20
            ? "😊"
            : weatherData[0]?.app_temp > 10
              ? "😌"
              : weatherData[0]?.app_temp > 10
                ? "❄️"
                : "🥶";

  return (
    <main className={styles.main}>
      <InputForm
        setWeatherData={setWeatherData}
        setForcastData={setForcastData}
      />
      {weatherData.length>0 && <div className={styles.weather}>
        <h1 className={styles.city}>
          {weatherData[0]?.city_name}, {weatherData[0]?.country_code}
        </h1>
        <div className={styles.mainicon}>
          <Image
            src={`https://cdn.weatherbit.io/static/img/icons/${weatherData[0]?.weather?.icon}.png`}
            alt={weatherData[0]?.weather?.description}
            height={200}
            width={200}
          />
        </div>
        <div className={styles.maintemp}>{weatherData[0]?.temp}&deg;C</div>
        <div className={styles.maintempdes}>
          {`Feels like ${weatherData[0]?.app_temp}°C.`}{" "}
          <span className={styles.emojie}>{feelsLikeEmojie}</span>
        </div>
         {/* <div
          className={styles.aqi}
          style={{
            backgroundColor:
              weatherData[0]?.aqi < 50
                ? "green"
                : weatherData[0]?.aqi < 100
                  ? "yellow"
                  : weatherData[0]?.aqi < 150
                    ? "orange"
                    : weatherData[0]?.aqi < 200
                      ? "red"
                      : weatherData[0]?.aqi < 150
                        ? "purple"
                        : "brown",
          }}
        >
          Air Quality Index: {weatherData[0]?.aqi}
        </div>  */}
        <div className={styles.moreinfo}>
          <div className={styles.info}>
            <WiHumidity size="1.8em" />
            <div className={styles.data}>{weatherData[0]?.rh}%</div>
          </div>
          <div className={styles.info}>
            <FaCloud size="1.8em" />
            <div className={styles.data}>{weatherData[0]?.clouds}%</div>
          </div>
          <div className={styles.info}>
            <IoRainySharp size="1.8em" />
            <div className={styles.data}>{weatherData[0]?.precip}mm</div>
          </div>
          <div className={styles.info}>
            <SiWindicss size="1.5em" />
            <div className={styles.data}>
              {weatherData[0]?.wind_spd.toFixed(2)}m/s
            </div>
          </div>
          <div className={styles.info}>
            <MdVisibility size="1.8em" />
            <div className={styles.data}>{weatherData[0]?.vis}km</div>
          </div>
        </div>
      </div>}
      {/* <ForcastCarousel forcastData={forcastData} /> */}
      {forcastData.length>0 && <HourlyForcast forcastData={forcastData}/>}
    </main>
  );
}
