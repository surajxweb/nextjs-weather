"use client";

import { useState } from "react";
import styles from "./InputForm.module.css";
import { FaSearch } from "react-icons/fa";

interface InputFormProps {
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
  setForcastData: React.Dispatch<React.SetStateAction<any[]>>;
}

const InputForm: React.FC<InputFormProps> = ({
  setWeatherData,
  setForcastData,
}) => {
  const [input, setInput] = useState("");

  const startTyping = (e: any) => {
    setInput(e.target.value);
  };

  const startSearching = async (e: any) => {
    e.preventDefault();
    // set redux search value to input
    const forcastResponse = await fetch(`/api/forcast-data?city=${input}`);
    const forcastData = await forcastResponse.json();
    setForcastData(forcastData.forecastData.data);
    console.log("raw data", forcastData.forecastData.data);
    const response = await fetch(`/api/weather-data?city=${input}`);
    const data = await response.json();
    setWeatherData(data.weatherData.data);
  };
  return (
    <form onSubmit={startSearching}>
      <label className={styles.form}>
        Enter City Name:
        <input type="text" value={input} onChange={startTyping} />
        <button type="submit">
          <FaSearch size="1.5em" />
        </button>
      </label>
    </form>
  );
};

export default InputForm;
