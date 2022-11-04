import styles from '@/styles/components/modal/modal.module.scss';

const Modal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wapper}></div>
    </div>
  );
};

export default Modal;
