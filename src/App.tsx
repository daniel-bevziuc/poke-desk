import { AppRouter } from './providers/router';
import { useTheme } from 'providers/ThemeProvider';
import { Layout } from 'components/ui/Layout';
import { AppLink, AppLinkTheme } from 'components/ui/AppLink/AppLink';
import { cn } from 'shared/lib/classNames';
import './styles/index.scss';
import { Header } from 'components/ui/Header';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Layout>
        <Header />

        {/* <AppLink to='/' theme={AppLinkTheme.PRIMARY}>
          Main Page
        </AppLink>
        <AppLink to='/details' theme={AppLinkTheme.PRIMARY}>
          Details Page
        </AppLink>
        <AppRouter /> */}
      </Layout>
    </div>
  );
};

export default App;
