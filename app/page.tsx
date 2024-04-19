import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.splashScreen}>
        <div className={styles.splashScreenContent}>
          <Image
            src='/acl - logo.png'
            alt='Company Logo'
            width={400}
            height={100}
            className={styles.logo}
          />
          <Link href='/home'>
            <button className={styles.usersButton}>Go to Home</button>
          </Link>
        </div>
      </div>

    </main>
  );
}
