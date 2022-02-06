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
      <section className="grid grid-cols-2">
        <article className="col-span-1 text-right p-4 h-[80vh] flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-my-primary">About Me</h1>
          <p>
            Hello, this is Front-End developer Jinwoong Bang. Graduated from the
            Department of Environmental Green Design, Sahmyook University, I
            double majored in business administration. It is June 29, 1991, The
            constellation is Cancer. Web development started with the
            recommendation of an Android developer friend, I completed the
            <strong className="text-white">SW Training Program</strong>{' '}
            education for 6 months with the support from the government.
          </p>
        </article>
        <article className="col-span-1">
          {/* <h1>오른쪽 레레이이아아웃</h1> */}
        </article>
      </section>
    </div>
  );
};

export default About;
