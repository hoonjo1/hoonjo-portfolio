import styles from '@/styles/components/common/main.module.scss';

interface Props {
  children: JSX.Element;
}

const Main = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Main;
