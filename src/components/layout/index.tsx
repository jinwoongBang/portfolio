import React from 'react';
import Image from 'next/image';

import type { LayoutProps } from 'src/components/layout/type';

import Logo from 'public/mix_crop.png';
import Instagram from 'public/instagram.png';
import Github from 'public/github.png';
import styles from 'src/components/layout/styles.module.css';

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Image src={Logo} alt="Empty Logo" layout="fill" />
        </div>
        <nav className={styles.nav}>
          <a href="./">About</a>
          <a href="./">Skills</a>
          <a href="./">Work</a>
          <a href="./">Trouble Shooting</a>
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
