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
          <p className="text-lg">
            Hello, this is Front-End developer Jinwoong Bang.
          </p>
          <p>
            Graduated from the Department of Environmental Green Design,
            Sahmyook University, I double majored in business administration.
          </p>
          <p>It is June 29, 1991, The constellation is Cancer.</p>
          <p>
            Web development started with the recommendation of an Android
            developer friend,
          </p>
          <p>
            I completed the
            <strong className="text-white">SW Training Program</strong>
            education for 6 months with the support from the government.
          </p>
        </article>
        <article className="col-span-1 mx-auto">
          <div className="relative h-full border-l border-white/20">
            <ul className={styles['career-list']}>
              <li>
                <div>
                  <h1>2009.01</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">대광 고등학교 졸업</h1>
                  <h2>이과</h2>
                </div>
              </li>
              <li>
                <div>
                  <h1>2017.03</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">삼육대학교 졸업</h1>
                  <h2>환경그린디자인학과</h2>
                  <h2>경영학과</h2>
                </div>
              </li>
              <li>
                <div>
                  <h1>2009.01</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">TheSMC 광고 기획자 (AE)</h1>
                </div>
              </li>
              <li>
                <div>
                  <h1>2009.01</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">
                    SW 개발자 양성 프로그램 교육 이수
                  </h1>
                </div>
              </li>
              <li>
                <div>
                  <h1>2009.01</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">(주) 맑은기술 Web Developer</h1>
                  <h2>Front-End</h2>
                  <h2>Back-End</h2>
                </div>
              </li>
              <li>
                <div>
                  <h1>2009.01</h1>
                </div>
                <div className="pl-10">
                  <h1 className="text-white">재직 중</h1>
                  <h2>이과</h2>
                </div>
              </li>
            </ul>
          </div>
          {/* <h1>오른쪽 레레이이아아웃</h1> */}
        </article>
      </section>
    </div>
  );
};

export default About;
