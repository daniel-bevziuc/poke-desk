import { cn } from 'shared/lib/classNames';
import styles from './PokeList.module.scss';

interface PokeListProps {
  name: string;
  url: string;
  index: number;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
}

const PokeList = ({ name, index, onClick, showModal }: PokeListProps) => {
  const onClickHandler = () => {
    onClick();
    showModal(true);
  };
  return (
    <div className={cn(styles.wrapper, {}, [])} onClick={onClickHandler}>
      <p className={styles.number}># {index}</p>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default PokeList;
