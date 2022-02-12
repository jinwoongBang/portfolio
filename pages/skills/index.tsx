import type { NextPage } from 'next';

import styles from 'styles/Skills.module.css';

function Skills() {
  return (
    <div className="container mx-auto">
      <section className="grid grid-rows-2 grid-cols-4 grid-flow-col">
        <article className={styles['title-container']}>
          <h1 className={styles['title']}>Skills</h1>
        </article>
        <article className={styles['skill-tree-container']}>
          <h1>스킬트리가 들어갈 자리</h1>
        </article>
        <aside className={styles['skill-container']}>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>Icon</span>
            <h2>Front-End</h2>
          </div>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>Icon</span>
            <h2>Back-End</h2>
          </div>
          <div className={styles['skill-item']}>
            <span className={styles['skill-item__icon']}>Icon</span>
            <h2>Design</h2>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Skills;
