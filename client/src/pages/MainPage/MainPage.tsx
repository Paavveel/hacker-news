import cn from 'classnames';
import { Button, NewsCard } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <Button appearance='primary'>
          <span>Update</span>
        </Button>
      </div>
      <NewsCard newsId={1} />
    </>
  );
};
