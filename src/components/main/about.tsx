import Link from 'next/link';

import styles from '@/styles/components/main/about.module.scss';
import Title from '@/components/common/title';
import { PhoneIcon, MailIcon, GithubIcon, NotionIcon } from '../icons';

const About = () => {
  return (
    <div className={styles.container}>
      <Title title={'ABOUT ME'} />
      <div className={styles.wapper}>
        {ABOUT_DATA.map(item => (
          <div key={item.description} className={styles.box}>
            <div>{item.icon}</div>
            {item.link ? (
              <Link href={item.link}>
                <p>{item.description}</p>
              </Link>
            ) : (
              <p>{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

const ABOUT_DATA = [
  {
    icon: <PhoneIcon />,
    description: '+82 10-4355-2450',
  },
  {
    icon: <MailIcon />,
    description: 'hoonjo1@gmail.com',
  },
  {
    icon: <GithubIcon />,
    description: 'GitHub',
    link: 'https://github.com/hoonjo1',
  },
  {
    icon: <NotionIcon />,
    description: 'Notion',
    link: 'https://jeonghoonjo.notion.site/Hoonjo-Jeong-ac09e54e93c54336996ff685462c66b2',
  },
];
