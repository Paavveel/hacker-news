import cn from 'classnames';
import { Button } from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <Button appearance='primary'>
          <span>Update</span>
        </Button>
      </div>
    </>
  );
};
