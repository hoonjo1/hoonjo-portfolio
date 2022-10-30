import styles from '@/styles/components/main/skills.module.scss';

import Title from '../common/title';
import Card from '../card/card';

import CardType from 'src/types/card';

const Skills = ({ SKILLS_DATA }: { SKILLS_DATA: CardType[] }) => {
  return (
    <div className={styles.container}>
      <Title title={'SKILLS'} />
      <Card item={SKILLS_DATA} />
    </div>
  );
};

export default Skills;
