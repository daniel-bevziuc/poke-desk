import { ThemeSwitcher } from 'components/shared/ThemeSwithcer';
import { cn } from 'shared/lib/classNames';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={cn(styles.wrapper, {}, [])}>
      <div className={styles.leftContent}>
        <h4>Created by Daniel Bevziuc</h4>
        <h1>Pokédex</h1>
      </div>
      <div className={styles.rightContent}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
