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
import { MenuIcon } from '@heroicons/react/solid';

import { PageURL } from 'src/commons/enum';

import Logo from 'public/mix_crop.png';
import Notion from 'public/notion-logo.svg';
// import Instagram from 'public/instagram.png';
import Github from 'public/github.png';
import styles from 'src/components/layout/styles.module.css';

const navigationList: Array<JWComponent.HeaderNavigation> = [
  // { label: 'HOME', url: PageURL.About },
  { label: 'ABOUT', url: PageURL.About },
  { label: 'SKILLS', url: PageURL.Skills },
  { label: 'WORK', url: PageURL.Work },
  { label: 'TROUBLESHOOTING', url: PageURL.Troubleshooting },
];

function Layout({ children }: JWComponent.LayoutProps) {
  const router = useRouter();

  return (
    <div className="">
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
        <nav className={styles['header__navigation__mobile']}>
          <MenuIcon width={30} height={30} />
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <nav className={styles['footer__nav']}>
          <ol>
            <li className={styles['footer__nav--item']}>
              <Link href="https://jwbang.notion.site/42d85a5b0ba04e76a6c0e19230058af1">
                <Image src={Notion} alt="Notion" width={20} height={20} />
              </Link>
            </li>
            <li className={styles['footer__nav--item']}>
              <Link href="https://github.com/jinwoongBang">
                <Image src={Github} alt="GitHub" width={20} height={20} />
              </Link>
            </li>
          </ol>
        </nav>
        <div className={styles['footer__bar']}></div>
      </footer>
    </div>
  );
}

export default Layout;
