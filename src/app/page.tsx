import styles from '@/styles/components/main/page.module.scss';

import Description from '@/components/main/description';
import About from '@/components/main/about';
import Projects from '@/components/main/projects';

const Page = () => {
  return (
    <div className={styles.container}>
      <Description />
      <Projects PROJECTS_DATA={PROJECTS_DATA} />
      <About />
    </div>
  );
};

export default Page;

const PROJECTS_DATA = [
  {
    title: '포트폴리오 웹페이지',
    subtitle: '2022.10',
    src: '',
    description:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.',
    stack: 'stack',
    function: '기능',
    github: 'link',
    url: 'url',
  },
  {
    title: '테스트 웹페이지',
    subtitle: '2022.09',
    src: '',
    description:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.',
    stack: 'stack',
    function: '기능',
    github: 'link',
    url: 'url',
  },
  {
    title: '테스트 웹페이지',
    subtitle: '2022.09',
    src: '',
    description:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.',
    stack: 'stack',
    function: '기능',
    github: 'link',
    url: 'url',
  },
];
