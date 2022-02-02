import React from 'react';

import type { LayoutProps } from 'src/components/layout/type';

import styles from 'src/components/layout/styles.module.css';

function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <header>
        <nav>
          <a>About</a>
          <a>Skills</a>
          <a>Work</a>
          <a>Trouble Shooting</a>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <nav>
          <a href="">Instagram</a>
          <a href="">GitHub</a>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
