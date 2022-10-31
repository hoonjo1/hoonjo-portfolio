import styles from '@/styles/components/card/card.module.scss';
import Item from '@/components/card/item';
import CardType from 'types';

const Card = ({ item }: { item: CardType[] }) => {
  return (
    <div className={styles.container}>
      {item.map(
        ({
          title,
          period,
          personnel,
          src,
          description,
          stack,
          functions,
          github,
          url,
        }) => (
          <Item
            key={description}
            title={title}
            period={period}
            src={src}
            personnel={personnel}
            description={description}
            stack={stack}
            functions={functions}
            github={github}
            url={url}
          />
        )
      )}
    </div>
  );
};

export default Card;
