import styles from '@/styles/components/main/projects.module.scss';
import CardType from 'types';

import Title from '@/components/common/title';
import Card from '@/components/card/card';

const Projects = ({ PROJECTS_DATA }: { PROJECTS_DATA: CardType[] }) => {
  return (
    <div className={styles.container}>
      <Title title={'PROJECTS'} />
      <Card item={PROJECTS_DATA} />
    </div>
  );
};

export default Projects;
