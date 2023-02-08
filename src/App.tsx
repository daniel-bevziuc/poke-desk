import { AppRouter } from './providers/router';
import { useTheme } from 'providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'components/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'components/shared/ThemeSwithcer';
import { cn } from 'shared/lib/classNames';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <ThemeSwitcher />
      <AppLink to='/' theme={AppLinkTheme.PRIMARY}>
        Main Page
      </AppLink>
      <AppLink to='/details' theme={AppLinkTheme.PRIMARY}>
        Details Page
      </AppLink>
      <AppRouter />
    </div>
  );
};

export default App;
