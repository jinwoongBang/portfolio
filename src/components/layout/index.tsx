import React, { useCallback } from 'react';

/**
 * Next
 */
import Image from 'next/image';
import { useRouter } from 'next/router';

/**
 * Library
 */
import clsx from 'clsx';

import type { LayoutProps } from 'src/components/layout/type';

import Logo from 'public/mix_crop.png';
import Instagram from 'public/instagram.png';
import Github from 'public/github.png';
import styles from 'src/components/layout/styles.module.css';

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const handleClickLogo = useCallback(() => {
    router.push('./');
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Image
            src={Logo}
            alt="Empty Logo"
            // layout="fill"
            onClick={handleClickLogo}
          />
        </div>
        <nav className={styles.nav}>
          <a href="./about">About</a>
          <a href="./skills">Skills</a>
          <a href="./work">Work</a>
          <a href="./trouble">Trouble Shooting</a>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <nav className={styles['footer__nav']}>
          <Image
            className={styles['footer__nav--item']}
            src={Instagram}
            alt="Instagram"
            width={20}
            height={20}
          />
          <Image
            className={styles['footer__nav--item']}
            src={Github}
            alt="GitHub"
            width={20}
            height={20}
          />
        </nav>
        <div className={styles['footer__bar']}></div>
      </footer>
    </div>
  );
}

export default Layout;
