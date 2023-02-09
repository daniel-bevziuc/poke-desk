import { cn } from 'shared/lib/classNames';
import { usePokeStats } from '../lib/usePokeStats';
import styles from './PokeStats.module.scss';

interface PokeStatsProps {
  name: string;
  url: string;
  showStats: React.Dispatch<React.SetStateAction<boolean>>;
}

const PokeStats = ({ name, url, showStats }: PokeStatsProps) => {
  const { pokeStats } = usePokeStats(url, name);
  return (
    <div className={cn(styles.layout, {}, [])}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.closeBtn} onClick={() => showStats(false)}>
            x
          </div>
          <img
            src={pokeStats?.sprites.front_default}
            alt='Poke img'
            className={styles.img}
          />
          <p className={styles.pokeName}>Name: {name}</p>
          <div className={styles.stats}>
            {pokeStats?.stats.map((item: any) => (
              <div key={item.name} className={styles.statRow}>
                <p>{item.stat.name}</p>
                <p>{item.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeStats;
