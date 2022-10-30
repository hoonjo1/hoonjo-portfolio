import Image from 'next/image';
import CardType from 'src/types/card';

const Item = ({ src, alt, width, height }: CardType) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default Item;
