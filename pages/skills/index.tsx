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
          <div className="flex pl-[46.5px] h-[78.5px] ">
            <Hexagon labels={['Form', 'Login']} />
            <Hexagon className="invisible" />
            <Hexagon className="invisible" />
            <Hexagon className="invisible" />
            <Hexagon labels={['ChartJS']} color="secondary" />
          </div>
          <div className="flex h-[78.5px]">
            <Hexagon labels={['JWT']} />
            <Hexagon labels={['Spring', 'Security']} />
            <Hexagon labels={['Spring5']} />
            <Hexagon labels={['JSP']} color="gradient" />
            <Hexagon labels={['Jquery']} color="secondary" />
          </div>
          <div className="flex pl-[46.5px] h-[78.5px] ">
            <Hexagon className="invisible" />
            <Hexagon labels={['Spring', 'Boot']} />
            <Hexagon labels={['Java']} />
            <Hexagon labels={['Javascript']} color="gradient" />
          </div>
          <div className="flex h-[78.5px]">
            <Hexagon labels={['SQL']} />
            <Hexagon labels={['MyBatis']} />
            <Hexagon labels={['SOAP']} />
            <Hexagon labels={['RESTful', 'API']} color="gradient" />
            <Hexagon labels={['Jquery']} color="secondary" />
          </div>
          <div className="flex pl-[46.5px] h-[78.5px] ">
            <Hexagon className="invisible" />
            <Hexagon className="invisible" />
            <Hexagon className="invisible" />
            <Hexagon labels={['JSON']} color="gradient" />
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
