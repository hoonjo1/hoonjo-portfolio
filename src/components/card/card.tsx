import styles from '@/styles/components/card/card.module.scss';
import CardType from 'src/types/card';
import Item from '@/components/card/item';

const Card = ({ item }: { item: CardType[] }) => {
  return (
    <div>
      {item.map(({ src, alt, width, height }) => (
        <Item key={src} src={src} alt={alt} width={width} height={height} />
      ))}
    </div>
  );
};

export default Card;
