import styles from '@/styles/components/common/navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jeong Hoon Jo</h1>
        <div className={styles.categoryWapper}>
          {MOVE_DATA.map(item => (
            <p key={item.name} className={styles.category}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const MOVE_DATA = [
  {
    name: 'Projects',
  },
  {
    name: 'About me',
  },
];
