import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Seo from "../components/Seo";
import Ep1Thumbnail from "../../public/epOneThumbnail.jpg";
import Ep2Thumbnail from "../../public/epTwoThumbnail.jpg";
import Ep3Thumbnail from "../../public/epThreeThumbnail.jpg";
import Ep4Thumbnail from "../../public/ep4Thumbnail.jpg";

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
        <a
          className={styles.videoThumbnailWrapper}
          href="https://youtube.com/watch?v=7YeA1U0Aklg"
        >
          <img src="/play.png" className={styles.videoThumbnailPlay} />
          <Image
            src={Ep4Thumbnail}
            fill={true}
            alt="Tomorrow! Episode 4"
            placeholder="blur"
          />
        </a>
        <div className={styles.videoEmbedWrapper}>
          <iframe
            style={{
              aspectRatio: "16 / 9",
              width: "100%",
            }}
            src="https://www.youtube.com/embed/7YeA1U0Aklg?modestbranding=1&version=3&vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.videoWrapper}>
        <a
          className={styles.videoThumbnailWrapper}
          href="https://youtube.com/watch?v=EgVK0AZFWu4"
        >
          <img src="/play.png" className={styles.videoThumbnailPlay} />
          <Image
            src={Ep3Thumbnail}
            fill={true}
            alt="Tomorrow! Episode 3"
            placeholder="blur"
          />
        </a>
        <div className={styles.videoEmbedWrapper}>
          <iframe
            style={{
              aspectRatio: "16 / 9",
              width: "100%",
            }}
            src="https://www.youtube.com/embed/EgVK0AZFWu4?modestbranding=1&version=3&vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.videoWrapper}>
        <a
          className={styles.videoThumbnailWrapper}
          href="https://www.youtube.com/watch?v=2zsXKM3axRQ"
        >
          <img src="/play.png" className={styles.videoThumbnailPlay} />
          <Image
            src={Ep2Thumbnail}
            fill={true}
            alt="Tomorrow! Episode 2"
            placeholder="blur"
          />
        </a>
        <div className={styles.videoEmbedWrapper}>
          <iframe
            style={{
              aspectRatio: "16 / 9",
              width: "100%",
            }}
            src="https://www.youtube.com/embed/2zsXKM3axRQ?modestbranding=1&version=3&vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.videoWrapper}>
        <a
          className={styles.videoThumbnailWrapper}
          href="https://www.youtube.com/watch?v=DJMpNe6UNgA"
        >
          <img src="/play.png" className={styles.videoThumbnailPlay} />
          <Image
            src={Ep1Thumbnail}
            fill={true}
            alt="Tomorrow! Episode 1"
            placeholder="blur"
          />
        </a>
        <div className={styles.videoEmbedWrapper}>
          <iframe
            style={{
              aspectRatio: "16 / 9",
              width: "100%",
            }}
            src="https://www.youtube.com/embed/DJMpNe6UNgA?modestbranding=1&version=3&vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.contact}>
        <a href="mailto:info@simonefilms.com">contact</a>
      </div>
    </main>
  );
};

export default Home;
