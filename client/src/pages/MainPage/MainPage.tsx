import cn from 'classnames';
import { Button, NewsCardList } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <Button appearance='primary'>
          <span>Update</span>
        </Button>
      </div>
      <NewsCardList posts={new Array(7).fill(0).map((item, i) => i)} />
    </>
  );
};
