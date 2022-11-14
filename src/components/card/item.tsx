import Link from 'next/link';
import styles from '@/styles/components/card/item.module.scss';
import CardType from 'types';

const Item = ({
  title,
  period,
  personnel,
  src,
  description,
  stack,
  functions,
  github,
  url,
}: CardType) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.period}>{period}</p>
        <p className={styles.personnel}>{personnel}</p>
      </div>
      {url ? (
        <Link href={url} className={styles.imgWapper}>
          <img className={styles.img} src={src} alt="project image" />
        </Link>
      ) : (
        <div className={styles.imgWapper}>
          <img className={styles.img} src={src} alt="project image" />
        </div>
      )}
      <div className={styles.section}>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <p className={styles.category}>사용기술 : {stack}</p>
        <p className={styles.category}>담당기능 : {functions}</p>
        <p className={styles.category}>
          저장소 :
          <Link className={styles.link} href={github}>
            GitHub Link
          </Link>
        </p>
        {url && (
          <p className={styles.category}>
            배포주소 :
            <Link className={styles.link} href={url}>
              Link
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Item;
