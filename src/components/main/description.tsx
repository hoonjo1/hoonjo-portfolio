import styles from '@/styles/components/main/description.module.scss';

const Description = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        사용자의 입장이 되어 서비스를 분석하고
        <br />
        새로운 기술을 학습하는 것을 좋아하는
        <br />
        프론트엔드 개발자 정훈조 입니다.
      </h1>
    </div>
  );
};

export default Description;
