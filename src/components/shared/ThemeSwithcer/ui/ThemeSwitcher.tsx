import { useTheme } from 'providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import Button, { ThemeButton } from 'components/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cn(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Toggle
    </Button>
  );
};
