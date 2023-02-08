import { useTheme } from 'providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import Button, { ThemeButton } from 'components/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cn(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      style={{
        border:
          theme === 'dark'
            ? '5px solid white'
            : '5px solid var(--primary-color)'
      }}
    >
      <div
        className={classes.halfBtn}
        style={{
          backgroundColor: theme === 'dark' ? 'white' : 'var(--primary-color)'
        }}
      />
      <div
        className={classes.halfBtn}
        style={{ backgroundColor: 'var(--bg-color)' }}
      />
    </Button>
  );
};
