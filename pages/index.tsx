/**
 * React
 */
import { useCallback } from 'react';

/**
 * Next js
 */
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from 'public/mix_crop.png';
import Me from 'public/me.png';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const handleClickAboutButton = useCallback(() => {
    router.push('./about');
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <section className="grid grid-cols-2 gap-4">
        <article className="col-span-1">
          <div className={styles['image-container']}>
            <div className={styles['image-container__logo']}>
              <Image src={Logo} alt="Empty Image" layout="fill" />
            </div>
            <div className={styles['image-container__me']}>
              <Image src={Me} alt="Empty Image" layout="fill" />
            </div>
          </div>
        </article>
        <article className={styles['greetings-container']}>
          <h1>Hi,</h1>
          <h1 className="">I&apos;m Jinwoong-Bang</h1>
          <h1 className="text-white">Web Developer</h1>
        </article>
        <article className={styles['duty-container']}>
          <ul className="mr-0">
            <li>&lt;Front-End-Developer&gt;</li>
            <ul className="ml-12">
              <li>&lt;Back-End-Developer /&gt;</li>
            </ul>
            <li>&lt;Front-End-Developer /&gt;</li>
          </ul>
        </article>
        <article className={styles['about-container']}>
          <button
            className={styles['about-container__button']}
            onClick={handleClickAboutButton}
          >
            About Me
          </button>
        </article>
      </section>
    </div>
  );
};

export default Home;
