import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Seo from "../components/Seo";

const formatTime = (value: number): string => {
  if (value < 10) {
    return "0" + String(value);
  } else return String(value);
};

const Home: React.FC = () => {
  // const countdown = useRef<HTMLElement>(null);

  // const countDownDate = new Date("Jan 1, 2023 00:00:00 GMT-0500").getTime();
  // change to false to enable countdown
  // const [isCompleted, setIsCompleted] = useState(true);
  // let intervalId = useRef<NodeJS.Timer>();
  // const [date, setDate] = useState({
  //   day: "00",
  //   hour: "00",
  //   minute: "00",
  //   second: "00",
  // });

  // const checkTime = () => {
  //   const now = new Date().getTime();

  //   const distance = countDownDate - now;

  //   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   setDate({
  //     day: formatTime(days),
  //     hour: formatTime(hours),
  //     minute: formatTime(minutes),
  //     second: formatTime(seconds),
  //   });

  //   if (countdown.current) countdown.current.style.opacity = "1";

  //   if (distance < 0) {
  //     setIsCompleted(true);
  //     stopCountdown();
  //   }
  // };

  // useEffect(() => {
  //   checkTime();
  //   intervalId.current = setInterval(checkTime, 1000);
  // }, []);

  // const stopCountdown = () => {
  //   clearInterval(intervalId.current);
  // };

  // useEffect(() => {
  //   if (isCompleted) {
  //     console.log("show youtube stream");
  //   }
  // }, [isCompleted]);

  return (
    <main className={styles.main}>
      <Seo />
      <div className={styles.logo}>
        <Image src="/logo.png" alt="The Network" width={1640} height={462} />
        <a
          href="https://www.simonefilms.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.logoLink}
        ></a>
      </div>

      <div className={styles.videoWrapper}>
        {/* <span ref={countdown} className={styles.countdown}>
          {date.day}:{date.hour}:{date.minute}:{date.second}
        </span> */}
        <iframe
          style={{
            aspectRatio: "16 / 9",
            width: "100%",
          }}
          src="https://www.youtube.com/embed/ETu0tPJSMJM?modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.contact}>
        <a href="mailto:info@simonefilms.com">contact</a>
      </div>
    </main>
  );
};

export default Home;
