import { FC } from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className={cn(styles.wrapper, {}, [])}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
