import Link from 'next/link';
import styles from '@/styles/components/common/footer.module.scss';
import { GithubIcon, NotionIcon } from '../icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linkWapper}>
          {FOOTER_DATA.map((item) => (
            <Link className={styles.link} href={item.link}>
              {item.icon}
            </Link>
          ))}
        </div>
        <p className={styles.description}>
          © 2022. Jeong Hoon Jo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_DATA = [
  {
    icon: <GithubIcon />,
    link: 'https://github.com/hoonjo1',
  },
  {
    icon: <NotionIcon />,
    link: 'https://jeonghoonjo.notion.site/Hoonjo-Jeong-ac09e54e93c54336996ff685462c66b2',
  },
];
