import Image from "next/image";
import styles from "./HourlyForcast.module.css";

interface ForcastCarouselProps {
  forcastData: any;
}

const HourlyForcast: React.FC<ForcastCarouselProps> = ({ forcastData }) => {
    const usableData = forcastData.slice(0,5);
  return (
    <div className={styles.container}>
      <h2>6 Hour Forcast</h2>

     <div className={styles.list}>
     {usableData?.map((data: any, i: number) => (
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
          {
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(data.timestamp_local))
}
          </div>
          <div className={styles.maintemp}>{data?.temp}&deg;C</div>
          {/* <div>{i}</div> */}
        </div>
      ))}
     </div>
    </div>
  );
};

export default HourlyForcast;
