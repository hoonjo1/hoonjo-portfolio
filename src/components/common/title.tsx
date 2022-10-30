import styles from '@/styles/components/common/title.module.scss';

const Title = ({ title }: { title: string }) => {
  return <span className={styles.title}>{title}</span>;
};

export default Title;
