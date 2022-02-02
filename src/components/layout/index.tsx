import React from 'react';
import Image from 'next/image';

import type { LayoutProps } from 'src/components/layout/type';

import Logo from 'public/mix_crop.png';
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
        <nav>
          <a href="">Instagram</a>
          <a href="">GitHub</a>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
