import React, { useCallback, useMemo } from 'react';

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

import { PageURL } from 'src/commons/enum';

import Logo from 'public/mix_crop.png';
import Instagram from 'public/instagram.png';
import Github from 'public/github.png';
import styles from 'src/components/layout/styles.module.css';

const navigationList: Array<JWComponent.HeaderNavigation> = [
  { label: 'About', url: PageURL.About },
  { label: 'Skills', url: PageURL.Skills },
  { label: 'Work', url: PageURL.Work },
  { label: 'Troubleshooting', url: PageURL.Troubleshooting },
];

function Layout({ children }: JWComponent.LayoutProps) {
  const router = useRouter();

  return (
    <div className="animate-bounce">
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Link href="/">
            <a>
              <Image src={Logo} alt="Empty Logo" />
            </a>
          </Link>
        </div>
        <nav className={styles['header__navigation']}>
          {navigationList.map((navigation) => (
            <Link key={navigation.url} href={navigation.url}>
              <a
                className={clsx(
                  styles['header__navigation-item'],
                  router.pathname === navigation.url &&
                    styles['header__navigation-item--selected'],
                )}
              >
                {navigation.label}
              </a>
            </Link>
          ))}
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
