import cn from 'classnames';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Main, Typography } from '../../components';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: FC = () => {
  const history = useHistory();

  return (
    <Main>
      <div className={cn(styles.container)}>
        <Button appearance='primary' onClick={() => history.goBack()}>
          Back to the news
        </Button>
      </div>
      <div className={styles.message}>
        <Typography size='l' color='special' weight='black'>
          404 Not Found
        </Typography>
      </div>
    </Main>
  );
};
