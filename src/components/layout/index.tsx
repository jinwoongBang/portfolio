import React, { useCallback } from 'react';

/**
 * Next
 */
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  return (
    <div className="animate-bounce">
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="Empty Logo"
                // layout="fill"
              />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <Link href="/trouble">
            <a>Trouble Shooting</a>
          </Link>
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
