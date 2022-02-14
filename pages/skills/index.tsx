import type { NextPage } from 'next';
import Hexagon from 'src/components/Hexagon';

import styles from 'styles/Skills.module.css';

function Skills() {
  return (
    <div className="container mx-auto">
      <section className="grid grid-rows-6 grid-cols-4 grid-flow-col">
        <article className={styles['title-container']}>
          <h1 className={styles['title']}>Skills</h1>
        </article>
        <article className={styles['skill-tree-container']}>
          <div className="flex border" style={{ transform: 'scale(1)' }}>
            <Hexagon labels={['Form', 'Login']} />
          </div>
        </article>
        <aside className={styles['skill-container']}>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>
              <Hexagon size="xs" color="secondary" />
            </span>
            <h2 className={styles['skill-item__title']}>Front-End</h2>
          </div>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>
              <Hexagon size="xs" />
            </span>
            <h2 className={styles['skill-item__title']}>Back-End</h2>
          </div>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>
              <Hexagon size="xs" color="gray" />
            </span>
            <h2 className={styles['skill-item__title']}>Design</h2>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Skills;
