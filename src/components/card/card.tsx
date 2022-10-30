import styles from '@/styles/components/card/card.module.scss';
import CardType from 'src/types/card';

const Card = ({ item }: { item: CardType[] }) => {
  return (
    <div className={styles.container}>
      {item.map(item => (
        <div className={styles.wapper}>내용</div>
      ))}
    </div>
  );
};

export default Card;
