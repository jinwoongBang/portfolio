/**
 * Nextjs
 */
import type { NextPage } from 'next';

/**
 * Styles
 */
import styles from 'styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div className="col-span-1 border border-white">
          <h1>왼쪽 레레이이아아웃</h1>
        </div>
        <div className="col-span-1 border border-white">
          <h1>오른쪽 레레이이아아웃</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
