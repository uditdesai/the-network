import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="The Network" width={1640} height={462} />
      </div>

      <div className={styles.contact}>
        <a href="mailto:info@simonefilms.com">contact</a>
      </div>
    </main>
  );
}
