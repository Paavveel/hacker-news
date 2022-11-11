import cn from 'classnames';
import { SlRefresh } from 'react-icons/sl';
import { Button, Typography } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <Typography
          color='secondary'
          size='l'
          weight='bold'
          className={styles.label}
        >
          Latest 100 news
        </Typography>
        <Button appearance='primary' className={cn(styles.button)}>
          <SlRefresh className={cn(styles.icon)} />
        </Button>
      </div>
    </>
  );
};
