import { useTheme } from 'providers/ThemeProvider';
import { Layout } from 'components/ui/Layout';
import { cn } from 'shared/lib/classNames';
import { Header } from 'components/ui/Header';
import { PokeList, usePokeList } from 'components/ui/PokeList';
import { useState } from 'react';
import { PokeStats } from 'components/ui/PokeStats';
import './styles/index.scss';

const App = () => {
  const [showStats, setShowStats] = useState(false);
  const [pokeSelected, setPokeSelected] = useState({
    name: '',
    url: ''
  });
  const { theme } = useTheme();
  const { isLoading, data } = usePokeList();
  const pokeData = data?.results;

  return (
    <div className={cn('app', {}, [theme])}>
      <Layout>
        <Header />
        {showStats && (
          <PokeStats
            name={pokeSelected.name}
            url={pokeSelected.url}
            showStats={setShowStats}
          />
        )}
        <div className='pokeList'>
          {!isLoading ? (
            pokeData.map((poke, index) => {
              return (
                <PokeList
                  name={poke.name}
                  index={index + 1}
                  key={poke.name}
                  url={poke.url}
                  showModal={setShowStats}
                  onClick={() =>
                    setPokeSelected({ name: poke.name, url: poke.url })
                  }
                />
              );
            })
          ) : (
            <div className={'loading'}>Loading...</div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default App;
