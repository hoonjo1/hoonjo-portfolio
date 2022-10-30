import styles from '@/styles/components/main/page.module.scss';

import Description from '@/components/main/description';
import About from '@/components/main/about';
import Skills from '@/components/main/skills';
import Projects from '@/components/main/projects';

const Page = () => {
  return (
    <div className={styles.container}>
      <Description />
      <About />
      <Skills SKILLS_DATA={SKILLS_DATA} />
      <Projects />
    </div>
  );
};

export default Page;

const SKILLS_DATA = [
  {
    src: '/img/es6.svg',
    alt: 'image',
    width: 100,
    height: 100,
  },
  {
    src: '/img/javascript.svg',
    alt: 'image',
    width: 100,
    height: 100,
  },
  {
    src: '/img/typescript.svg',
    alt: 'image',
    width: 100,
    height: 100,
  },
  {
    src: '/img/react.svg',
    alt: 'image',
    width: 100,
    height: 100,
  },
];
